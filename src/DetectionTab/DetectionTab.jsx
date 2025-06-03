import { useState, useRef, useEffect, useCallback } from 'react';

// Constants for better maintainability
const INTERVALS = {
  ACTIVE_MESSAGE: 1000,    // 1 second
  KEEP_ALIVE: 10000,       // 10 seconds
};

const TAB_STATES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

function DetectionTab() {
  // State management
  const [tabState, setTabState] = useState(TAB_STATES.ACTIVE);
  const [messageCount, setMessageCount] = useState(0);
  const [keepAliveCount, setKeepAliveCount] = useState(0);
  const [lastActivity, setLastActivity] = useState(new Date());

  // Refs for interval management
  const activeIntervalRef = useRef(null);
  const keepAliveIntervalRef = useRef(null);

  // Cleanup function to clear all intervals
  const clearAllIntervals = useCallback(() => {
    if (activeIntervalRef.current) {
      clearInterval(activeIntervalRef.current);
      activeIntervalRef.current = null;
    }
    if (keepAliveIntervalRef.current) {
      clearInterval(keepAliveIntervalRef.current);
      keepAliveIntervalRef.current = null;
    }
  }, []);

  // Start active message counting
  const startActiveMode = useCallback(() => {
    clearAllIntervals();
    setTabState(TAB_STATES.ACTIVE);
    setLastActivity(new Date());
    
    activeIntervalRef.current = setInterval(() => {
      setMessageCount(prev => prev + 1);
    }, INTERVALS.ACTIVE_MESSAGE);
  }, [clearAllIntervals]);

  // Start keep-alive mode
  const startInactiveMode = useCallback(() => {
    clearAllIntervals();
    setTabState(TAB_STATES.INACTIVE);
    setLastActivity(new Date());
     
    keepAliveIntervalRef.current = setInterval(() => {
      setKeepAliveCount(prev => {
        const newCount = prev + 1;
        // Simulate API call for keep-alive
        console.log(`Keep-alive signal sent: ${newCount}`);
        // Here you would make your actual API call
        // await keepAliveAPI();
        return newCount;
      });
    }, INTERVALS.KEEP_ALIVE);
  }, [clearAllIntervals]);

  // Event handlers
  const handleTabBlur = useCallback(() => {
    console.log('Tab became inactive');
    startInactiveMode();
  }, [startInactiveMode]);

  const handleTabFocus = useCallback(() => {
    console.log('Tab became active');
    startActiveMode();
  }, [startActiveMode]);

  // Reset counters
  const resetCounters = useCallback(() => {
    setMessageCount(0);
    setKeepAliveCount(0);
    setLastActivity(new Date());
  }, []);

  // Format time display
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  // Setup event listeners and initial state
  useEffect(() => {
    // Add event listeners
    window.addEventListener('blur', handleTabBlur);
    window.addEventListener('focus', handleTabFocus);
    
    // Start in active mode
    startActiveMode();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('blur', handleTabBlur);
      window.removeEventListener('focus', handleTabFocus);
      clearAllIntervals();
    };
  }, [handleTabBlur, handleTabFocus, startActiveMode, clearAllIntervals]);

  return (
    <>
      <div>
        <h2 className="mb-2 text-lg font-semibold text-gray-900 flex items-center">
          Requirements <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded ml-2">Hard</span>
        </h2>
        <div className="space-y-1 text-gray-500 list-disc list-inside">
          Build a Tab Activity Monitor that detects when the tab is active or inactive.
          <ul className="space-y-1 text-gray-500 list-disc list-inside mt-5  ml-5">
            <li>
              When the tab is active, it should count messages every second.
            </li>
            <li>
              When the tab is inactive, it should send keep-alive signals every 10 seconds.
            </li>
          </ul>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <br />
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Tab Activity Monitor
        </h2>
        
        {/* Status Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Tab Status
            </h3>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${
                tabState === TAB_STATES.ACTIVE 
                  ? 'bg-green-500 animate-pulse' 
                  : 'bg-red-500'
              }`}></div>
              <span className={`font-medium ${
                tabState === TAB_STATES.ACTIVE 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-red-600 dark:text-red-400'
              }`}>
                {tabState === TAB_STATES.ACTIVE ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Last Activity
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {formatTime(lastActivity)}
            </p>
          </div>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 border-2 border-blue-200 dark:border-blue-600 rounded-lg">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
              Active Messages
            </h3>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {messageCount}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Updates every second when active
            </p>
          </div>

          <div className="p-4 border-2 border-orange-200 dark:border-orange-600 rounded-lg">
            <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">
              Keep-Alive Signals
            </h3>
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
              {keepAliveCount}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Sent every 10 seconds when inactive
            </p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={resetCounters}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            Reset Counters
          </button>
          
          <button
            onClick={startActiveMode}
            disabled={tabState === TAB_STATES.ACTIVE}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
          >
            Force Active Mode
          </button>
          
          <button
            onClick={startInactiveMode}
            disabled={tabState === TAB_STATES.INACTIVE}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-colors duration-200"
          >
            Force Inactive Mode
          </button>
        </div>

        {/* Debug Info */}
        <div className="mt-6 p-3 bg-gray-100 dark:bg-gray-700 rounded text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Debug:</strong> Switch to another tab or window to see the inactive mode in action.
            The component will automatically detect focus changes and adjust its behavior.
          </p>
        </div>
      </div>
    </>
  );
}

export default DetectionTab;