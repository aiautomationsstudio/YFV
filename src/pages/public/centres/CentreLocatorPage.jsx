import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Search, Filter, Navigation, Clock, Phone, Mail, Calendar, ChevronRight, X, 
  List, Map as MapIcon, Crosshair, Layers, Star, TrendingUp, AlertCircle, MapPinned, 
  Users, Building2, Award, Activity, Zap, Target, Maximize2, Minimize2
} from 'lucide-react';

const CentreLocatorPage = () => {
  const [viewMode, setViewMode] = useState('map');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCentre, setSelectedCentre] = useState(null);
  const [map, setMap] = useState(null);
  const [mapLoading, setMapLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [mapStyle, setMapStyle] = useState('default');
  const [showHeatmap, setShowHeatmap] = useState(false);
  const [showClusters, setShowClusters] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [markerCluster, setMarkerCluster] = useState(null);
  const mapContainerRef = useRef(null);
  const mapInitialized = useRef(false);

  const centres = [
    { id: 1, name: 'AIIMS Delhi Vaccination Centre', address: 'Ansari Nagar, New Delhi', state: 'Delhi', city: 'New Delhi', 
      pincode: '110029', phone: '+91-11-2658-8500', email: 'yfv.aiims@gov.in', timings: '9:00 AM - 5:00 PM', 
      workingDays: 'Mon - Sat', status: 'open', distance: 2.5, availableSlots: 15, totalSlots: 20, rating: 4.8, 
      reviews: 245, waitTime: '15 min', features: ['Wheelchair Access', 'Parking', 'Digital Certificate'], 
      coordinates: { lat: 28.5672, lng: 77.2100 }, popularity: 95 },
    { id: 2, name: 'Safdarjung Hospital YFV Center', address: 'Ring Road, Safdarjung Enclave', state: 'Delhi', 
      city: 'New Delhi', pincode: '110029', phone: '+91-11-2616-5060', timings: '8:30 AM - 4:30 PM', 
      workingDays: 'Mon - Fri', status: 'open', distance: 5.8, availableSlots: 8, totalSlots: 15, rating: 4.5, 
      reviews: 189, waitTime: '25 min', features: ['Emergency Services'], coordinates: { lat: 28.5677, lng: 77.2089 }, 
      popularity: 78 },
    { id: 3, name: 'Ram Manohar Lohia Hospital', address: 'Baba Kharak Singh Marg', state: 'Delhi', city: 'New Delhi', 
      pincode: '110001', phone: '+91-11-2336-5525', timings: '9:00 AM - 3:00 PM', workingDays: 'Mon - Sat', 
      status: 'open', distance: 7.2, availableSlots: 12, totalSlots: 18, rating: 4.6, reviews: 312, waitTime: '20 min', 
      features: ['Wheelchair Access', 'Parking'], coordinates: { lat: 28.6341, lng: 77.2147 }, popularity: 85 },
    { id: 4, name: 'Sir Ganga Ram Hospital', address: 'Rajinder Nagar', state: 'Delhi', city: 'New Delhi', 
      pincode: '110060', phone: '+91-11-2575-0000', timings: '10:00 AM - 6:00 PM', workingDays: 'All Days', 
      status: 'open', distance: 4.3, availableSlots: 20, totalSlots: 25, rating: 4.9, reviews: 428, waitTime: '10 min', 
      features: ['24/7 Service', 'Cafeteria'], coordinates: { lat: 28.6404, lng: 77.1871 }, popularity: 98 }
  ];

  const states = ['Delhi', 'Maharashtra', 'Karnataka'];
  const cities = selectedState === 'Delhi' ? ['New Delhi', 'South Delhi', 'North Delhi'] : [];
  const mapStyles = [
    { id: 'default', name: 'Default', url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' },
    { id: 'dark', name: 'Dark', url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' }
  ];

  const getFilteredCentres = () => {
    let filtered = centres.filter(centre => {
      const matchesState = !selectedState || centre.state === selectedState;
      const matchesCity = !selectedCity || centre.city === selectedCity;
      const matchesSearch = !searchQuery || centre.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'all' || centre.status === filterStatus;
      return matchesState && matchesCity && matchesSearch && matchesStatus;
    });
    filtered.sort((a, b) => sortBy === 'distance' ? a.distance - b.distance : b.rating - a.rating);
    return filtered;
  };

  const filteredCentres = getFilteredCentres();

  useEffect(() => {
    if (viewMode !== 'map' || !mapContainerRef.current || mapInitialized.current) return;

    const loadLeaflet = () => {
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const initMap = () => {
      if (!window.L || !mapContainerRef.current) return;
      const L = window.L;
      
      try {
        const mapInstance = L.map(mapContainerRef.current, { zoomControl: false }).setView([28.6139, 77.2090], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mapInstance);
        L.control.zoom({ position: 'bottomright' }).addTo(mapInstance);

        filteredCentres.forEach(centre => {
          const color = centre.status === 'open' ? '#0369a1' : '#ef4444';
          const icon = L.divIcon({
            html: `<div style="position:relative;width:40px;height:50px;">
              <svg width="40" height="50" viewBox="0 0 40 50">
                <path d="M20 0C8.954 0 0 8.954 0 20c0 13.333 20 30 20 30s20-16.667 20-30C40 8.954 31.046 0 20 0z" 
                  fill="${color}" stroke="white" stroke-width="2"/>
                <circle cx="20" cy="20" r="8" fill="white"/>
                <text x="20" y="25" text-anchor="middle" fill="${color}" font-size="16" font-weight="bold">+</text>
              </svg>
              ${centre.availableSlots > 0 ? `<div style="position:absolute;top:-5px;right:-5px;background:#10b981;color:white;
                font-size:11px;font-weight:800;border-radius:50%;width:20px;height:20px;display:flex;align-items:center;
                justify-content:center;border:2px solid white;">${centre.availableSlots}</div>` : ''}
            </div>`,
            iconSize: [40, 50],
            iconAnchor: [20, 50]
          });

          L.marker([centre.coordinates.lat, centre.coordinates.lng], { icon })
            .addTo(mapInstance)
            .bindPopup(`
              <div style="min-width:250px;font-family:Inter,sans-serif;">
                <div style="padding:12px;border-bottom:2px solid #0369a1;">
                  <h3 style="margin:0 0 8px 0;font-size:15px;font-weight:700;">${centre.name}</h3>
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="background:#dcfce7;color:#166534;padding:3px 8px;border-radius:10px;font-size:10px;
                      font-weight:700;text-transform:uppercase;">${centre.status}</span>
                    <span style="font-weight:700;">★ ${centre.rating}</span>
                  </div>
                </div>
                <div style="padding:12px;">
                  <p style="margin:4px 0;font-size:12px;">📍 ${centre.address}</p>
                  <p style="margin:4px 0;font-size:12px;">🕐 ${centre.timings}</p>
                  <p style="margin:4px 0;font-size:12px;">⏱️ Wait: ${centre.waitTime}</p>
                </div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding:12px;background:#f9fafb;">
                  <div style="text-align:center;">
                    <div style="font-size:10px;color:#6b7280;">Slots</div>
                    <div style="font-weight:800;color:#059669;">${centre.availableSlots}/${centre.totalSlots}</div>
                  </div>
                  <div style="text-align:center;">
                    <div style="font-size:10px;color:#6b7280;">Distance</div>
                    <div style="font-weight:800;color:#0369a1;">${centre.distance}km</div>
                  </div>
                  <div style="text-align:center;">
                    <div style="font-size:10px;color:#6b7280;">Rating</div>
                    <div style="font-weight:800;">★${centre.rating}</div>
                  </div>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:12px;background:#f9fafb;">
                  <a href="/centres/${centre.id}" style="padding:8px;background:#0369a1;color:white;text-align:center;
                    text-decoration:none;border-radius:8px;font-size:12px;font-weight:700;">Details</a>
                  <a href="/book-appointment/select-slot/${centre.id}" style="padding:8px;background:#f59e0b;color:white;
                    text-align:center;text-decoration:none;border-radius:8px;font-size:12px;font-weight:700;">Book</a>
                </div>
              </div>
            `);
        });

        setMap(mapInstance);
        mapInitialized.current = true;
        setMapLoading(false);
      } catch (error) {
        console.error('Map error:', error);
        setMapLoading(false);
      }
    };

    loadLeaflet();

    return () => {
      if (map) {
        map.remove();
        setMap(null);
        mapInitialized.current = false;
      }
    };
  }, [viewMode]);

  const getUserLocation = () => {
    if (!navigator.geolocation) return alert('Geolocation not supported');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (map && window.L) {
          const L = window.L;
          const coords = [position.coords.latitude, position.coords.longitude];
          L.marker(coords, {
            icon: L.divIcon({
              html: `<div style="width:20px;height:20px;background:#3b82f6;border:3px solid white;
                border-radius:50%;box-shadow:0 2px 8px rgba(59,130,246,0.5);"></div>`,
              iconSize: [20, 20]
            })
          }).addTo(map).bindPopup('You are here').openPopup();
          map.setView(coords, 13);
        }
      },
      () => alert('Unable to get location')
    );
  };

  const clearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSearchQuery('');
    setFilterStatus('all');
    setSortBy('distance');
  };

  const activeFiltersCount = [selectedState, selectedCity, filterStatus !== 'all'].filter(Boolean).length;

  return (
    <>
      <Helmet>
        <title>Find Vaccination Centres - YFV Platform</title>
        <meta name="description" content="Locate Yellow Fever vaccination centres with interactive map" />
      </Helmet>

      <div className="bg-gradient-to-br from-brand-50 via-blue-50 to-indigo-50 min-h-screen">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-700 via-brand-800 to-indigo-900 text-white py-8 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-xl p-3 rounded-2xl border border-white/30">
                    <MapPinned className="text-accent-400" size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black">Centre Locator</h1>
                    <div className="flex items-center space-x-2 mt-2">
                      <Zap className="text-accent-400" size={16} />
                      <p className="text-brand-100 text-sm font-semibold">Interactive map with real-time availability</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex bg-white/10 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
                <button onClick={() => setViewMode('map')}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all ${
                    viewMode === 'map' ? 'bg-white text-brand-700 shadow-xl' : 'text-white hover:bg-white/10'}`}>
                  <MapIcon size={22} />
                  <span className="font-bold">Map</span>
                </button>
                <button onClick={() => setViewMode('list')}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all ${
                    viewMode === 'list' ? 'bg-white text-brand-700 shadow-xl' : 'text-white hover:bg-white/10'}`}>
                  <List size={22} />
                  <span className="font-bold">List</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="lg:col-span-5">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input type="text" placeholder="Search centres..." value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 
                        focus:ring-brand-500 focus:border-brand-500 transition-all" />
                    {searchQuery && (
                      <button onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        <X size={20} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <select value={selectedState} onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(''); }}
                    className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500">
                    <option value="">All States</option>
                    {states.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>

                <div className="lg:col-span-2">
                  <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedState}
                    className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500 
                      disabled:bg-gray-50 disabled:cursor-not-allowed">
                    <option value="">All Cities</option>
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>

                <div className="lg:col-span-3 flex gap-2">
                  <button onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="flex-1 bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 
                      text-white py-4 px-4 rounded-2xl font-bold shadow-xl relative">
                    <div className="flex items-center justify-center space-x-2">
                      <Filter size={20} />
                      <span>Filters</span>
                    </div>
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full 
                        w-7 h-7 flex items-center justify-center border-3 border-white">{activeFiltersCount}</span>
                    )}
                  </button>
                  
                  {activeFiltersCount > 0 && (
                    <button onClick={clearFilters}
                      className="px-4 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-2xl font-bold">
                      <X size={20} />
                    </button>
                  )}
                </div>
              </div>

              {showMobileFilters && (
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Status</label>
                      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500">
                        <option value="all">All Centres</option>
                        <option value="open">Open Now</option>
                        <option value="closed">Closed</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Sort By</label>
                      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500">
                        <option value="distance">Distance</option>
                        <option value="rating">Rating</option>
                      </select>
                    </div>
                    
                    <div className="flex items-end">
                      <button onClick={() => setShowMobileFilters(false)}
                        className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-4 rounded-xl 
                          font-bold shadow-lg">Apply</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Building2 className="text-brand-700" size={20} />
                  <p className="text-gray-600">Showing <span className="font-black text-brand-700 text-2xl">
                    {filteredCentres.length}</span> centres</p>
                </div>
                <Link to="/centres/list" 
                  className="flex items-center space-x-2 text-brand-700 font-bold text-sm px-5 py-2.5 bg-brand-50 
                    rounded-xl hover:bg-brand-100">
                  <span>View All</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {viewMode === 'map' ? (
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative border-2 border-gray-100">
                  <div ref={mapContainerRef} className="h-[700px] relative">
                    {mapLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-50 
                        to-blue-50 z-[2000]">
                        <div className="text-center">
                          <div className="inline-block animate-spin rounded-full h-16 w-16 border-8 border-brand-200 
                            border-t-brand-700 mb-4"></div>
                          <p className="text-gray-800 font-bold text-xl">Loading Map...</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4 z-[1000]">
                    <button onClick={getUserLocation}
                      className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 hover:bg-brand-50">
                      <Crosshair size={24} className="text-brand-700" />
                    </button>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-t from-white via-white to-transparent">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-brand-700 rounded-full border-3 border-white shadow-xl"></div>
                          <span className="text-sm font-bold">Open</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-red-500 rounded-full border-3 border-white shadow-xl"></div>
                          <span className="text-sm font-bold">Closed</span>
                        </div>
                      </div>
                      <button onClick={getUserLocation}
                        className="flex items-center space-x-2 bg-gradient-to-r from-brand-600 to-brand-700 text-white 
                          font-bold text-sm px-6 py-3 rounded-xl shadow-xl">
                        <Navigation size={18} />
                        <span>Find Nearest</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredCentres.map(centre => (
                    <div key={centre.id} className="bg-white rounded-3xl shadow-xl p-6 border-2 border-transparent 
                      hover:border-brand-300 transition-all">
                      <div className="flex justify-between">
                        <div className="flex-1">
                          <h3 className="font-black text-xl mb-2">{centre.name}</h3>
                          <div className="flex items-center space-x-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              centre.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {centre.status === 'open' ? 'OPEN' : 'CLOSED'}
                            </span>
                            <div className="flex items-center">
                              <Star className="text-amber-500 fill-amber-500 mr-1" size={16} />
                              <span className="font-bold">{centre.rating}</span>
                            </div>
                          </div>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center"><MapPin size={16} className="mr-2 text-brand-700" />
                              {centre.address}</div>
                            <div className="flex items-center"><Clock size={16} className="mr-2 text-brand-700" />
                              {centre.timings}</div>
                            <div className="flex items-center"><Users size={16} className="mr-2 text-brand-700" />
                              {centre.availableSlots}/{centre.totalSlots} slots</div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <Link to={`/centres/${centre.id}`} className="btn-primary text-center text-sm py-3 px-5 
                            rounded-xl">Details</Link>
                          <Link to={`/book-appointment/select-slot/${centre.id}`} className="btn-secondary text-center 
                            text-sm py-3 px-5 rounded-xl">Book</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand-700 to-indigo-900 text-white rounded-3xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-black text-xl">Live Stats</h3>
                  <Activity className="text-accent-400 animate-pulse" size={28} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                    <div className="text-4xl font-black mb-2">{centres.length}</div>
                    <div className="text-xs text-brand-100 font-semibold">Total</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                    <div className="text-4xl font-black mb-2">{centres.filter(c => c.status === 'open').length}</div>
                    <div className="text-xs text-brand-100 font-semibold">Open</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-accent-50 to-yellow-50 rounded-3xl shadow-2xl p-6 border-2 
                border-accent-200">
                <h3 className="font-black text-xl mb-5 flex items-center">
                  <Zap className="mr-3 text-accent-600" size={24} />Quick Actions</h3>
                <div className="space-y-3">
                  <Link to="/book-appointment" 
                    className="block w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-4 
                      rounded-2xl font-black text-center shadow-xl">Book Now</Link>
                  <Link to="/validate-certificate" 
                    className="block w-full bg-white border-2 border-gray-300 px-6 py-4 rounded-2xl font-bold 
                      text-center text-gray-700 shadow-lg">Validate Certificate</Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl p-6 border-2 
                border-blue-200">
                <h3 className="font-black text-xl mb-4 flex items-center">
                  <AlertCircle className="mr-3 text-blue-600" size={24} />Need Help?</h3>
                <div className="space-y-3">
                  <a href="tel:1800-xxx-xxxx" className="flex items-center space-x-3 bg-white p-4 rounded-xl">
                    <Phone size={20} />
                    <span className="font-black text-lg">1800-XXX-XXXX</span>
                  </a>
                  <a href="mailto:support@yfvplatform.gov.in" className="flex items-center space-x-3 bg-white p-4 
                    rounded-xl">
                    <Mail size={20} />
                    <span className="text-sm font-bold">support@yfvplatform.gov.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentreLocatorPage;