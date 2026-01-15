import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Calendar, Star, Filter, Search, X, ChevronDown, 
  Navigation, Users, Building2, Award, TrendingUp, Zap, AlertCircle,
  ChevronRight, Mail, CheckCircle, Activity
} from 'lucide-react';

const CentreListPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [showFilters, setShowFilters] = useState(false);

  // Shared data structure with CentreLocatorPage
  const centres = [
    { id: 1, name: 'AIIMS Delhi Vaccination Centre', address: 'Ansari Nagar, New Delhi', state: 'Delhi', 
      city: 'New Delhi', pincode: '110029', phone: '+91-11-2658-8500', email: 'yfv.aiims@gov.in', 
      timings: '9:00 AM - 5:00 PM', workingDays: 'Mon - Sat', status: 'open', distance: 2.5, 
      availableSlots: 15, totalSlots: 20, rating: 4.8, reviews: 245, waitTime: '15 min', 
      features: ['Wheelchair Access', 'Parking', 'Digital Certificate'], popularity: 95 },
    { id: 2, name: 'Safdarjung Hospital YFV Center', address: 'Ring Road, Safdarjung Enclave', 
      state: 'Delhi', city: 'New Delhi', pincode: '110029', phone: '+91-11-2616-5060', 
      email: 'yfv.safdarjung@gov.in', timings: '8:30 AM - 4:30 PM', workingDays: 'Mon - Fri', 
      status: 'open', distance: 5.8, availableSlots: 8, totalSlots: 15, rating: 4.5, reviews: 189, 
      waitTime: '25 min', features: ['Emergency Services', 'Digital Certificate'], popularity: 78 },
    { id: 3, name: 'Ram Manohar Lohia Hospital', address: 'Baba Kharak Singh Marg', state: 'Delhi', 
      city: 'New Delhi', pincode: '110001', phone: '+91-11-2336-5525', email: 'yfv.rml@gov.in', 
      timings: '9:00 AM - 3:00 PM', workingDays: 'Mon - Sat', status: 'open', distance: 7.2, 
      availableSlots: 12, totalSlots: 18, rating: 4.6, reviews: 312, waitTime: '20 min', 
      features: ['Wheelchair Access', 'Parking'], popularity: 85 },
    { id: 4, name: 'Sir Ganga Ram Hospital', address: 'Rajinder Nagar', state: 'Delhi', 
      city: 'New Delhi', pincode: '110060', phone: '+91-11-2575-0000', email: 'yfv.gangaram@gov.in', 
      timings: '10:00 AM - 6:00 PM', workingDays: 'All Days', status: 'open', distance: 4.3, 
      availableSlots: 20, totalSlots: 25, rating: 4.9, reviews: 428, waitTime: '10 min', 
      features: ['24/7 Service', 'Cafeteria', 'Digital Certificate'], popularity: 98 },
    { id: 5, name: 'Max Super Speciality Hospital', address: 'Saket, South Delhi', state: 'Delhi', 
      city: 'South Delhi', pincode: '110017', phone: '+91-11-2651-5050', email: 'yfv.max@gov.in', 
      timings: '9:00 AM - 7:00 PM', workingDays: 'All Days', status: 'open', distance: 8.5, 
      availableSlots: 18, totalSlots: 22, rating: 4.7, reviews: 367, waitTime: '18 min', 
      features: ['Wheelchair Access', 'Parking', 'Cafeteria'], popularity: 88 },
    { id: 6, name: 'Fortis Hospital Vasant Kunj', address: 'Sector B, Pocket 1, Vasant Kunj', 
      state: 'Delhi', city: 'South Delhi', pincode: '110070', phone: '+91-11-4277-6222', 
      email: 'yfv.fortis@gov.in', timings: '8:00 AM - 6:00 PM', workingDays: 'Mon - Sat', 
      status: 'open', distance: 12.3, availableSlots: 10, totalSlots: 16, rating: 4.6, reviews: 298, 
      waitTime: '22 min', features: ['Parking', 'Emergency Services'], popularity: 80 }
  ];

  const states = ['Delhi', 'Maharashtra', 'Karnataka'];
  const cities = selectedState === 'Delhi' ? ['New Delhi', 'South Delhi', 'North Delhi'] : [];

  const getFilteredCentres = () => {
    let filtered = centres.filter(centre => {
      const matchesState = !selectedState || centre.state === selectedState;
      const matchesCity = !selectedCity || centre.city === selectedCity;
      const matchesSearch = !searchQuery || 
        centre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        centre.address.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'all' || centre.status === filterStatus;
      return matchesState && matchesCity && matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'distance') return a.distance - b.distance;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return 0;
    });

    return filtered;
  };

  const filteredCentres = getFilteredCentres();
  const activeFiltersCount = [selectedState, selectedCity, filterStatus !== 'all'].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedState('');
    setSelectedCity('');
    setSearchQuery('');
    setFilterStatus('all');
    setSortBy('distance');
  };

  return (
    <>
      <Helmet>
        <title>All Vaccination Centres - YFV Platform</title>
        <meta name="description" content="Complete list of authorized Yellow Fever vaccination centres across India" />
      </Helmet>

      <div className="bg-gradient-to-br from-brand-50 via-blue-50 to-indigo-50 min-h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-700 via-brand-800 to-indigo-900 text-white py-8 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-xl p-3 rounded-2xl border border-white/30">
                    <Building2 className="text-accent-400" size={32} />
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black">All Centres</h1>
                    <div className="flex items-center space-x-2 mt-2">
                      <Activity className="text-accent-400" size={16} />
                      <p className="text-brand-100 text-sm font-semibold">Complete directory of vaccination centres</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/centres"
                className="bg-white/10 backdrop-blur-xl border border-white/30 text-white px-6 py-3 rounded-2xl 
                  font-bold hover:bg-white/20 transition-all flex items-center space-x-2 w-fit">
                <MapPin size={20} />
                <span>Map View</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search & Filters */}
          <div className="mb-8">
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              {/* Search Bar */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input type="text" placeholder="Search by name or address..." value={searchQuery}
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

              {/* Filters Row */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <div className="md:col-span-2">
                  <select value={selectedState} 
                    onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(''); }}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500">
                    <option value="">All States</option>
                    {states.map(state => <option key={state} value={state}>{state}</option>)}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}
                    disabled={!selectedState}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500 
                      disabled:bg-gray-50 disabled:cursor-not-allowed">
                    <option value="">All Cities</option>
                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                  </select>
                </div>

                <div>
                  <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500">
                    <option value="all">All Status</option>
                    <option value="open">Open</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div>
                  <button onClick={() => setShowFilters(!showFilters)}
                    className="w-full bg-gradient-to-r from-brand-600 to-brand-700 text-white py-3 px-4 rounded-xl 
                      font-bold shadow-lg relative">
                    <Filter size={20} className="inline mr-2" />
                    More
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full 
                        w-6 h-6 flex items-center justify-center border-2 border-white">{activeFiltersCount}</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Extended Filters */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Sort By</label>
                      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-brand-500">
                        <option value="distance">Distance</option>
                        <option value="rating">Rating</option>
                        <option value="name">Name</option>
                        <option value="popularity">Popularity</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2 flex items-end gap-2">
                      {activeFiltersCount > 0 && (
                        <button onClick={clearFilters}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl 
                            font-bold">Clear All</button>
                      )}
                      <button onClick={() => setShowFilters(false)}
                        className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-4 
                          rounded-xl font-bold shadow-lg">Apply</button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="mt-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-3">
                  <Building2 className="text-brand-700" size={20} />
                  <p className="text-gray-600">Showing <span className="font-black text-brand-700 text-2xl">
                    {filteredCentres.length}</span> centres</p>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-green-600" size={18} />
                  <span className="text-sm text-gray-600">Sorted by: <span className="font-bold">
                    {sortBy.charAt(0).toUpperCase() + sortBy.slice(1)}</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Centres Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredCentres.map(centre => (
              <div key={centre.id} 
                className="bg-white rounded-3xl shadow-xl border-2 border-transparent hover:border-brand-300 
                  transition-all overflow-hidden group">
                {/* Header */}
                <div className="bg-gradient-to-r from-brand-700 to-brand-800 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 
                    translate-x-1/2"></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-black text-white pr-4 leading-tight">{centre.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        centre.status === 'open' 
                          ? 'bg-green-400 text-green-900' 
                          : 'bg-red-400 text-red-900'
                      }`}>
                        {centre.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-white/20 backdrop-blur-xl px-3 py-1.5 rounded-full">
                        <Star className="text-amber-400 fill-amber-400 mr-1" size={16} />
                        <span className="text-white font-bold">{centre.rating}</span>
                        <span className="text-white/70 text-xs ml-1">({centre.reviews})</span>
                      </div>
                      <div className="flex items-center text-white/90 text-sm">
                        <Navigation className="mr-1" size={14} />
                        <span className="font-bold">{centre.distance} km</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <MapPin className="text-brand-700 mr-3 flex-shrink-0 mt-1" size={18} />
                      <div>
                        <p className="font-semibold text-gray-900">{centre.address}</p>
                        <p className="text-sm text-gray-500">{centre.city}, {centre.state} - {centre.pincode}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Clock className="text-brand-700 mr-3 flex-shrink-0" size={18} />
                      <div>
                        <p className="font-semibold text-gray-900">{centre.timings}</p>
                        <p className="text-sm text-gray-500">{centre.workingDays}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Phone className="text-brand-700 mr-3 flex-shrink-0" size={18} />
                      <a href={`tel:${centre.phone}`} className="font-semibold text-gray-900 hover:text-brand-700">
                        {centre.phone}</a>
                    </div>

                    <div className="flex items-center">
                      <Mail className="text-brand-700 mr-3 flex-shrink-0" size={18} />
                      <a href={`mailto:${centre.email}`} 
                        className="font-semibold text-gray-900 hover:text-brand-700 text-sm">{centre.email}</a>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 text-center border 
                      border-green-200">
                      <Users className="text-green-600 mx-auto mb-1" size={20} />
                      <div className="text-sm font-black text-green-700">{centre.availableSlots}/{centre.totalSlots}</div>
                      <div className="text-xs text-green-600">Slots</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 text-center border 
                      border-blue-200">
                      <Clock className="text-blue-600 mx-auto mb-1" size={20} />
                      <div className="text-sm font-black text-blue-700">{centre.waitTime}</div>
                      <div className="text-xs text-blue-600">Wait</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-3 text-center border 
                      border-purple-200">
                      <TrendingUp className="text-purple-600 mx-auto mb-1" size={20} />
                      <div className="text-sm font-black text-purple-700">{centre.popularity}%</div>
                      <div className="text-xs text-purple-600">Popular</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {centre.features.map((feature, idx) => (
                      <span key={idx} 
                        className="px-3 py-1.5 bg-brand-50 text-brand-700 rounded-lg text-xs font-bold flex 
                          items-center">
                        <CheckCircle size={14} className="mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link to={`/centres/${centre.id}`}
                      className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-3 px-4 rounded-xl 
                        font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center 
                        justify-center group">
                      <span>View Details</span>
                      <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to={`/book-appointment/select-slot/${centre.id}`}
                      className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3 px-4 rounded-xl 
                        font-bold text-center shadow-lg hover:shadow-xl transition-all flex items-center 
                        justify-center">
                      <Calendar size={18} className="mr-2" />
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCentres.length === 0 && (
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
              <AlertCircle className="text-gray-400 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No centres found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
              <button onClick={clearFilters}
                className="bg-gradient-to-r from-brand-600 to-brand-700 text-white px-8 py-3 rounded-xl 
                  font-bold shadow-lg">Clear All Filters</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CentreListPage;