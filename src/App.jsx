import { useState, useMemo } from 'react'

// Fetch the local image asset from your folder
const eventImg = new URL('./assets/Rectangle 1490.png', import.meta.url).href;

// SVG Icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E7E9EA] hover:opacity-80 transition-opacity">
    <path d="M3 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9.49219 12H21.0022" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 12H5.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SnippetLogo = () => (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6.63507C0 2.97062 2.97062 0 6.63507 0H28.3649C32.0294 0 35 2.97062 35 6.63507V28.3649C35 32.0294 32.0294 35 28.3649 35H6.63507C2.97062 35 0 32.0294 0 28.3649V6.63507Z" fill="black" />
    <path d="M26.6544 22.6576C27.7797 21.4717 28.5884 20.234 29.0803 18.9445C29.5721 17.6551 29.7427 16.4266 29.592 15.2591C29.4413 14.0916 28.9347 13.0986 28.0722 12.2801C27.2713 11.5201 26.3871 11.0176 25.4195 10.7726C24.4365 10.513 23.3024 10.5052 22.0172 10.7491C20.7166 10.9784 19.234 11.4302 17.5696 12.1046C16.3507 12.5871 15.3534 12.9286 14.5777 13.1291C13.802 13.3296 13.1805 13.3985 12.7133 13.3356C12.2307 13.2582 11.8431 13.0806 11.5504 12.8029C11.15 12.4229 10.9581 11.9773 10.9748 11.4663C10.9768 10.9706 11.2263 10.461 11.7232 9.93731C12.2493 9.38286 12.7972 9.08316 13.3667 9.03821C13.9362 8.99326 14.4366 9.1754 14.8679 9.58463C15.0989 9.80386 15.2861 10.0693 15.4294 10.3809C15.5573 10.678 15.6434 11.0962 15.6875 11.6357C15.7163 12.1606 15.7275 12.8737 15.721 13.775L15.5323 29.7973L19.6829 30.004L19.873 12.3146C19.8917 11.3079 19.8388 10.4382 19.7145 9.70552C19.5902 8.97287 19.3932 8.33223 19.1235 7.7836C18.8392 7.25038 18.4738 6.77184 18.0271 6.348C17.2417 5.60262 16.3513 5.15285 15.356 4.99868C14.3608 4.84452 13.3433 4.99131 12.3038 5.43906C11.2488 5.87218 10.239 6.59699 9.27439 7.61348C8.38286 8.55296 7.76956 9.50768 7.43452 10.4776C7.06945 11.4484 6.98146 12.3894 7.17052 13.3005C7.34497 14.2271 7.81723 15.0558 8.58729 15.7866C9.26495 16.4296 10.0495 16.8521 10.9409 17.0541C11.8168 17.2414 12.8447 17.207 14.0245 16.9508C15.1896 16.71 16.5744 16.2533 18.1788 15.5805C19.2784 15.1311 20.2168 14.8362 20.9941 14.6957C21.7414 14.556 22.3794 14.5468 22.9083 14.6681C23.4371 14.7895 23.9094 15.0474 24.3253 15.442C24.7103 15.8074 24.9472 16.2518 25.036 16.7751C25.1102 17.3138 25.0274 17.8792 24.7876 18.4712C24.5478 19.0632 24.1502 19.6518 23.5948 20.2371C22.7032 21.1766 21.6692 21.8344 20.4925 22.2107C19.3005 22.5723 18.0175 22.6134 16.6435 22.334C15.2395 22.0554 13.8041 21.4396 12.3374 20.4868L10.498 24.2296C12.3758 25.3969 14.2869 26.1128 16.2312 26.3773C18.1756 26.6417 20.0408 26.4652 21.8268 25.8478C23.6129 25.2303 25.2221 24.1669 26.6544 22.6576Z" fill="#E7E9EA" />
    <path d="M10.2465 21.0288C10.2465 21.9449 9.5038 22.6875 8.58769 22.6875C7.67157 22.6875 6.92892 21.9449 6.92892 21.0288C6.92892 20.1127 7.67157 19.37 8.58769 19.37C9.5038 19.37 10.2465 20.1127 10.2465 21.0288Z" fill="#F06CB7" />
  </svg>
);

const LocationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E7E9EA]">
    <path d="M5.9975 6.71497C6.85906 6.71497 7.5575 6.01654 7.5575 5.15497C7.5575 4.29341 6.85906 3.59497 5.9975 3.59497C5.13594 3.59497 4.4375 4.29341 4.4375 5.15497C4.4375 6.01654 5.13594 6.71497 5.9975 6.71497Z" stroke="currentColor" />
    <path d="M1.80888 4.245C2.79388 -0.0849988 9.20888 -0.0799987 10.1889 4.25C10.7639 6.79 9.18388 8.94 7.79888 10.27C6.79388 11.24 5.20388 11.24 4.19388 10.27C2.81388 8.94 1.23388 6.785 1.80888 4.245Z" stroke="currentColor" />
  </svg>
);

const TagIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
    <path d="M2.26091 8.28756L4.71466 10.7413C5.72216 11.7488 7.35799 11.7488 8.37091 10.7413L10.7488 8.36339C11.7563 7.35589 11.7563 5.72006 10.7488 4.70714L8.28966 2.25881C7.77508 1.74422 7.06549 1.46797 6.33966 1.50589L3.63133 1.63589C2.54799 1.68464 1.68674 2.54589 1.63258 3.62381L1.50258 6.33214C1.47008 7.06339 1.74633 7.77297 2.26091 8.28756Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.14323 6.50002C5.89111 6.50002 6.4974 5.89374 6.4974 5.14585C6.4974 4.39797 5.89111 3.79169 5.14323 3.79169C4.39534 3.79169 3.78906 4.39797 3.78906 5.14585C3.78906 5.89374 4.39534 6.50002 5.14323 6.50002Z" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const INITIAL_EVENTS = [
  {
    id: 1,
    day: 'Today',
    dayOfWeek: 'Tuesday',
    time: '10:00 PM',
    title: 'Indo-UAW Startup Conect',
    location: 'PSG iTech, Coimbatore',
    category: 'Debate',
    image: eventImg,
    badges: [
      { text: '₹ 10,000 Prize Pool', emoji: '🤑' },
      { text: '₹ 100 Entry', emoji: '🎟️' }
    ],
    hoodType: 'your',
    description: 'Connect with emerging tech leaders from UAE and India. Pitch your ideas, participate in high-stakes debate, and stand a chance to win from a ₹10,000 prize pool!'
  },
  {
    id: 2,
    day: 'Tomorrow',
    dayOfWeek: 'Wednesday',
    time: '10:00 PM',
    title: 'Event 2',
    location: 'PSG iTech, Coimbatore',
    category: 'Hackathon',
    image: eventImg,
    badges: [
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'your',
    description: 'Unleash your creativity and coding skills in Event 2 Hackathon. Work in teams, build awesome projects overnight, and network with leading developers.'
  },
  {
    id: 3,
    day: 'Tomorrow',
    dayOfWeek: 'Wednesday',
    time: '10:00 PM',
    title: 'Event 3',
    location: 'PSG iTech, Coimbatore',
    category: 'Debate',
    image: eventImg,
    badges: [
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'your',
    description: 'Event 3 is a challenging Debate battle testing your analytical and speaking abilities. Challenge peers on contemporary economic and technological issues.'
  },
  {
    id: 4,
    day: 'Today',
    dayOfWeek: 'Tuesday',
    time: '07:30 PM',
    title: 'Coimbatore AI Mixer',
    location: 'PSG College of Technology',
    category: 'Networking',
    image: eventImg,
    badges: [
      { text: '₹ 5,000 Cash Prizes', emoji: '🤑' },
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'other',
    description: 'Join developers, hobbyists, and AI startups around Coimbatore. Learn about LLM architectures, agents, and share what you have been building.'
  },
  {
    id: 5,
    day: 'Tomorrow',
    dayOfWeek: 'Wednesday',
    time: '09:00 AM',
    title: 'Design Sprint Workshop',
    location: 'KCT Tech Park, Coimbatore',
    category: 'Workshop',
    image: eventImg,
    badges: [
      { text: 'FREE Entry', emoji: '🙌' }
    ],
    hoodType: 'other',
    description: 'A practical, hands-on workshop led by industry designers on Google Ventures Design Sprint methodology. Learn to prototype and test ideas in just 5 days.'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('your'); // 'your' or 'other'
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Interactive Modal / Drawer States
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter Preferences
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [entryFilter, setEntryFilter] = useState('All'); // 'All', 'Free', 'Paid'

  // New Event Form State
  const [newTitle, setNewTitle] = useState('');
  const [newLocation, setNewLocation] = useState('PSG iTech, Coimbatore');
  const [newTime, setNewTime] = useState('10:00 PM');
  const [newDay, setNewDay] = useState('Today'); // 'Today' or 'Tomorrow'
  const [newDayOfWeek, setNewDayOfWeek] = useState('Tuesday'); // e.g. Tuesday or Wednesday
  const [newCategory, setNewCategory] = useState('Debate');
  const [newPrizePool, setNewPrizePool] = useState('');
  const [newEntryFee, setNewEntryFee] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Handle Event Creation
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const badges = [];
    if (newPrizePool.trim()) {
      badges.push({ text: `₹ ${newPrizePool} Prize Pool`, emoji: '🤑' });
    }
    if (newEntryFee.trim() && parseInt(newEntryFee) > 0) {
      badges.push({ text: `₹ ${newEntryFee} Entry`, emoji: '🎟️' });
    } else {
      badges.push({ text: 'FREE Entry', emoji: '🙌' });
    }

    const categoryImages = {
      'Debate': eventImg,
      'Hackathon': eventImg,
      'Workshop': eventImg,
      'Networking': eventImg
    };

    const newEvent = {
      id: events.length + 1,
      day: newDay,
      dayOfWeek: newDayOfWeek,
      time: newTime,
      title: newTitle,
      location: newLocation,
      category: newCategory,
      image: categoryImages[newCategory] || eventImg,
      badges: badges,
      hoodType: activeTab,
      description: newDescription || `A premium ${newCategory} event happening at ${newLocation}. Don't miss out on this opportunity!`
    };

    setEvents([newEvent, ...events]);

    // Reset Form & Close Modal
    setNewTitle('');
    setNewPrizePool('');
    setNewEntryFee('');
    setNewDescription('');
    setIsCreateOpen(false);
  };

  // Filtered & Grouped Events list
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Hood filter
      if (event.hoodType !== activeTab) return false;

      // Category filter
      if (categoryFilter !== 'All' && event.category !== categoryFilter) return false;

      // Entry Ticket filter
      if (entryFilter !== 'All') {
        const hasFreeBadge = event.badges.some(b => b.text.toLowerCase().includes('free'));
        if (entryFilter === 'Free' && !hasFreeBadge) return false;
        if (entryFilter === 'Paid' && hasFreeBadge) return false;
      }

      return true;
    });
  }, [events, activeTab, categoryFilter, entryFilter]);

  // Group events by day ('Today' or 'Tomorrow')
  const groupedEvents = useMemo(() => {
    const groups = {
      Today: [],
      Tomorrow: []
    };
    filteredEvents.forEach(event => {
      if (groups[event.day]) {
        groups[event.day].push(event);
      } else {
        if (!groups[event.day]) groups[event.day] = [];
        groups[event.day].push(event);
      }
    });
    return groups;
  }, [filteredEvents]);

  const allCategories = useMemo(() => {
    const cats = new Set(events.filter(e => e.hoodType === activeTab).map(e => e.category));
    return ['All', ...Array.from(cats)];
  }, [events, activeTab]);

  return (
    <div className="flex-1 bg-[#121212] min-h-screen flex flex-col justify-start items-center p-0 md:py-6">

      {/* RESPONSIVE CONTAINER: w-full max-w-[372px] ensures it fits mobile perfectly without squishing */}
      <div className="w-full max-w-[372px] mx-auto bg-black min-h-screen md:min-h-[850px] md:max-h-[920px] md:rounded-[40px] md:border-[10px] md:border-zinc-900 md:shadow-[0_0_50px_rgba(255,255,255,0.03)] flex flex-col relative overflow-y-auto overflow-x-hidden scrollbar-thin">

        {/* 1. Header (Navbar) - Flex layout prevents crushing */}
        <header className="flex justify-between items-center px-[16px] h-[56px] sticky top-0 bg-black z-30 select-none border-b border-[#262626]">
          <div className="flex items-center gap-[8px]">
            <button className="hover:opacity-80 transition-opacity w-[24px] h-[24px]">
              <MenuIcon />
            </button>
            <div className="cursor-pointer transition-transform hover:scale-105 active:scale-95 w-[35px] h-[35px]">
              <SnippetLogo />
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            <button
              onClick={() => setIsCreateOpen(true)}
              className="w-[94px] h-[27px] rounded-[25px] border-[0.5px] border-[#2F3336] text-[12px] font-normal font-sans text-[#E7E9EA] bg-black hover:border-zinc-500 transition-all duration-200 flex items-center justify-center"
            >
              create event
            </button>
            <button
              onClick={() => setIsFilterOpen(true)}
              className="w-[55px] h-[27px] rounded-[25px] border-[0.5px] border-[#2F3336] text-[12px] font-normal font-sans text-[#E7E9EA] bg-black hover:border-zinc-500 transition-all duration-200 flex items-center justify-center"
            >
              filter
            </button>
          </div>
        </header>

        {/* 2. Interactive Navigation Tabs */}
        <nav className="flex h-[44px] w-full border-b border-[#262626] z-20 select-none bg-black">
          <button
            onClick={() => {
              setActiveTab('your');
              setCategoryFilter('All');
              setEntryFilter('All');
            }}
            className="flex-1 flex justify-center items-center relative transition-all duration-200"
          >
            <span className={activeTab === 'your' ? 'text-[#E7E9EA] text-[14px] font-semibold font-sans leading-[17px]' : 'text-[#676767] text-[14px] font-semibold font-sans leading-[17px]'}>
              your hoods
            </span>
            {activeTab === 'your' && (
              <div className="absolute bottom-[-1px] w-[100px] h-[2px] bg-[#E7E9EA] rounded-[30px] transition-all"></div>
            )}
          </button>
          
          <button
            onClick={() => {
              setActiveTab('other');
              setCategoryFilter('All');
              setEntryFilter('All');
            }}
            className="flex-1 flex justify-center items-center relative transition-all duration-200"
          >
            <span className={activeTab === 'other' ? 'text-[#E7E9EA] text-[14px] font-semibold font-sans leading-[17px]' : 'text-[#676767] text-[14px] font-semibold font-sans leading-[17px]'}>
              other hoods
            </span>
            {activeTab === 'other' && (
              <div className="absolute bottom-[-1px] w-[100px] h-[2px] bg-[#E7E9EA] rounded-[30px] transition-all"></div>
            )}
          </button>
        </nav>

        {/* Filters status indicator bar */}
        {(categoryFilter !== 'All' || entryFilter !== 'All') && (
          <div className="bg-zinc-950 px-4 py-2 flex items-center justify-between text-xs border-b border-zinc-900 select-none animate-fadeIn">
            <div className="flex items-center gap-1.5 text-pink-400 font-medium">
              Showing active filters: {categoryFilter !== 'All' ? `${categoryFilter}` : ''}
              {categoryFilter !== 'All' && entryFilter !== 'All' ? ' + ' : ''}
              {entryFilter !== 'All' ? `${entryFilter} tickets` : ''}
            </div>
            <button
              onClick={() => {
                setCategoryFilter('All');
                setEntryFilter('All');
              }}
              className="text-zinc-500 hover:text-[#E7E9EA] underline"
            >
              clear all
            </button>
          </div>
        )}

        {/* 3. Event List Section with Timeline */}
        <main className="flex-1 relative select-none w-full pb-[40px] pt-[18px] overflow-hidden">
          {filteredEvents.length === 0 ? (
            <div className="py-24 text-center flex flex-col items-center justify-center animate-fadeIn">
              <h3 className="text-zinc-400 font-semibold mb-1">No events found</h3>
            </div>
          ) : (
            <>
              {/* Central Dashed Track */}
              <div className="absolute left-[15px] top-[23px] bottom-[40px] w-[3px] border-l-[3px] border-dashed border-[#262626] z-0"></div>

              {/* Today Section */}
              {groupedEvents.Today && groupedEvents.Today.length > 0 && (
                <div className="relative w-full pl-[32px] pr-[21px] mb-[28px]">
                  {/* Dot */}
                  <div className="absolute left-[13.5px] top-[5px] w-[7px] h-[7px] rounded-full bg-[#E7E9EA] z-10"></div>
                  
                  {/* Header */}
                  <div className="flex items-center gap-[8px] mb-[13px]">
                    <span className="text-[#E7E9EA] text-[12px] font-semibold font-sans leading-[15px]">Today</span>
                    <span className="text-[#676767] text-[12px] font-semibold font-sans leading-[15px]">Tuesday</span>
                  </div>

                  {/* Cards container - Note the w-full which naturally fills the space */}
                  <div className="flex flex-col gap-[10px] w-full">
                    {groupedEvents.Today.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onClick={() => setSelectedEvent(event)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Tomorrow Section */}
              {groupedEvents.Tomorrow && groupedEvents.Tomorrow.length > 0 && (
                <div className="relative w-full pl-[32px] pr-[21px]">
                  {/* Dot */}
                  <div className="absolute left-[13.5px] top-[5px] w-[7px] h-[7px] rounded-full bg-[#E7E9EA] z-10"></div>

                  {/* Header */}
                  <div className="flex items-center gap-[8px] mb-[13px]">
                    <span className="text-[#E7E9EA] text-[12px] font-semibold font-sans leading-[15px]">Tomorrow</span>
                    <span className="text-[#676767] text-[12px] font-semibold font-sans leading-[15px]">Wednesday</span>
                  </div>

                  {/* Cards container */}
                  <div className="flex flex-col gap-[10px] w-full">
                    {groupedEvents.Tomorrow.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onClick={() => setSelectedEvent(event)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </main>

        {/* 4. Bottom-Sheet Modal: CREATE EVENT */}
        {isCreateOpen && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center select-none animate-fadeIn">
            <div className="w-full bg-[#0D0E11] border-t border-zinc-800 rounded-t-[30px] p-6 max-h-[85%] overflow-y-auto flex flex-col gap-4 animate-slideUp">

              {/* Drawer Handle */}
              <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-2"></div>

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#E7E9EA]">create event</h3>
                <button
                  onClick={() => setIsCreateOpen(false)}
                  className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-[#E7E9EA]"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleCreateSubmit} className="flex flex-col gap-4 text-sm mt-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Event Title *</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Indo-UAE Startup Connect"
                    required
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Day</label>
                    <select
                      value={newDay}
                      onChange={(e) => {
                        setNewDay(e.target.value);
                        setNewDayOfWeek(e.target.value === 'Today' ? 'Tuesday' : 'Wednesday');
                      }}
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                    >
                      <option value="Today">Today</option>
                      <option value="Tomorrow">Tomorrow</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Day of Week</label>
                    <input
                      type="text"
                      value={newDayOfWeek}
                      onChange={(e) => setNewDayOfWeek(e.target.value)}
                      placeholder="e.g. Tuesday"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Time</label>
                    <input
                      type="text"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      placeholder="10:00 PM"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Category</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                    >
                      <option value="Debate">Debate</option>
                      <option value="Hackathon">Hackathon</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Networking">Networking</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Location</label>
                  <input
                    type="text"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Prize Pool (₹, optional)</label>
                    <input
                      type="text"
                      value={newPrizePool}
                      onChange={(e) => setNewPrizePool(e.target.value)}
                      placeholder="e.g. 10,000"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-zinc-400 font-medium">Entry Fee (₹, 0 for free)</label>
                    <input
                      type="number"
                      value={newEntryFee}
                      onChange={(e) => setNewEntryFee(e.target.value)}
                      placeholder="e.g. 100"
                      className="bg-black border border-zinc-800 rounded-xl px-3 py-2.5 text-[#E7E9EA] focus:border-pink-500 outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-zinc-400 font-medium">Description</label>
                  <textarea
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="Provide detailed event agenda..."
                    rows={2}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-2 text-[#E7E9EA] focus:border-pink-500 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-400 active:scale-[0.99] text-black font-bold py-3.5 rounded-xl mt-2 shadow-[0_4px_20px_rgba(236,72,153,0.3)] transition-all"
                >
                  Publish Event
                </button>
              </form>
            </div>
          </div>
        )}

        {/* 5. Bottom-Sheet Modal: FILTERS */}
        {isFilterOpen && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center select-none animate-fadeIn">
            <div className="w-full bg-[#0D0E11] border-t border-zinc-800 rounded-t-[30px] p-6 max-h-[70%] overflow-y-auto flex flex-col gap-5 animate-slideUp">

              {/* Drawer Handle */}
              <div className="w-10 h-1 bg-zinc-700 rounded-full mx-auto mb-1"></div>

              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-[#E7E9EA]">filter events</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-[#E7E9EA]"
                >
                  ✕
                </button>
              </div>

              {/* Category Filter Group */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-400">Category</label>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${categoryFilter === cat
                        ? 'bg-pink-500 text-black font-bold'
                        : 'bg-black border border-zinc-800 text-[#E7E9EA] hover:border-zinc-500'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticket Price Filter Group */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-400">Ticket Type</label>
                <div className="flex gap-2">
                  {['All', 'Free', 'Paid'].map(type => (
                    <button
                      key={type}
                      onClick={() => setEntryFilter(type)}
                      className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${entryFilter === type
                        ? 'bg-pink-500 text-black font-bold'
                        : 'bg-black border border-zinc-800 text-[#E7E9EA] hover:border-zinc-500'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-2 select-none">
                <button
                  onClick={() => {
                    setCategoryFilter('All');
                    setEntryFilter('All');
                    setIsFilterOpen(false);
                  }}
                  className="flex-1 bg-zinc-900 text-[#E7E9EA] py-3 rounded-xl font-bold hover:bg-zinc-800"
                >
                  Reset
                </button>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="flex-1 bg-[#E7E9EA] text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 6. Premium Event Detail Modal */}
        {selectedEvent && (
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 select-none animate-fadeIn">
            <div className="w-full max-w-sm bg-[#0D0E11] border border-zinc-800 rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col max-h-[85%] animate-scaleUp">

              {/* Event Image Banner with Close Button Overlay */}
              <div className="h-44 w-full relative">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E11] via-transparent to-black/40"></div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white hover:bg-black"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 left-4 inline-flex items-center gap-1 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-md">
                  <TagIcon />
                  {selectedEvent.category}
                </div>
              </div>

              {/* Event Info Details */}
              <div className="p-5 flex flex-col gap-4 overflow-y-auto scrollbar-none">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-pink-400 bg-pink-400/10 px-2 py-0.5 rounded-full">
                    {selectedEvent.day} • {selectedEvent.time}
                  </span>
                  <h3 className="text-lg font-bold text-[#E7E9EA] mt-2 leading-tight">{selectedEvent.title}</h3>

                  <div className="flex items-center gap-1.5 mt-2.5">
                    <LocationIcon />
                    <span className="text-zinc-400 text-xs">{selectedEvent.location}</span>
                  </div>
                </div>

                {/* Sub Badges Grid */}
                <div className="flex flex-wrap gap-1.5">
                  {selectedEvent.badges.map((badge, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 bg-zinc-950 border border-zinc-900 text-zinc-300 text-[10px] px-2.5 py-1 rounded-lg">
                      <span>{badge.emoji}</span>
                      <span>{badge.text}</span>
                    </span>
                  ))}
                </div>

                <div className="border-t border-zinc-900 pt-3">
                  <h4 className="text-xs font-semibold text-zinc-400 mb-1">About the Event</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{selectedEvent.description}</p>
                </div>
              </div>

              {/* Sticky bottom CTA in Modal */}
              <div className="p-4 border-t border-zinc-900 bg-zinc-950 select-none">
                <button
                  onClick={() => alert(`Registered for ${selectedEvent.title}!`)}
                  className="w-full bg-pink-500 hover:bg-pink-400 text-black font-bold py-3 rounded-xl text-xs tracking-wider uppercase shadow-[0_4px_15px_rgba(236,72,153,0.2)] transition-all"
                >
                  Register Now
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Inner Component for Reusable Event Cards
function EventCard({ event, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full h-[149px] bg-black border border-[#2F3336] rounded-[10px] relative cursor-pointer hover:bg-zinc-950 transition-colors shrink-0"
    >
      {/* Time */}
      <div className="absolute left-[10px] top-[15px] text-[#616161] text-[10px] font-medium font-sans leading-[12px]">
        {event.time}
      </div>

      {/* Title */}
      <div className="absolute left-[10px] top-[36px] text-[#E7E9EA] text-[15px] font-semibold font-sans w-[200px] leading-[18px]">
        {event.title}
      </div>

      {/* Location */}
      <div className="absolute left-[10px] top-[62px] flex items-center gap-[6px]">
        <LocationIcon />
        <span className="text-[#E7E9EA] text-[12px] font-normal font-sans leading-[15px] truncate w-[180px]">
          {event.location}
        </span>
      </div>

      {/* Main Category Badge */}
      <div className="absolute left-[10px] top-[83px] flex items-center justify-center gap-[5px] bg-[#E7E9EA] rounded-[7px] h-[24px] px-[8px]">
        <TagIcon />
        <span className="text-black text-[12px] font-semibold font-sans leading-[15px]">{event.category}</span>
      </div>

      {/* Sub Badges Grid */}
      <div className="absolute left-[10px] top-[116px] flex gap-[6px]">
        {event.badges.map((badge, idx) => (
          <div key={idx} className="flex items-center gap-[4px] bg-black border border-[#2F3336] rounded-[7px] h-[24px] px-[8px]">
            <span className="text-[12px] leading-none">{badge.emoji}</span>
            <span className="text-[#E7E9EA] text-[12px] font-normal font-sans leading-[15px] whitespace-nowrap">{badge.text}</span>
          </div>
        ))}
      </div>

      {/* Event Thumbnail */}
      <div className="absolute right-[10px] top-[15px] w-[78px] h-[78px] rounded-[7px] overflow-hidden border border-[#2F3336]">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default App;