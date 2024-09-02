const isValidURL = (string) => {                                                                                                        // Helper Function to check URL is Valid 
    const check1 = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);      // Check URL using REGEX
    const check2 = string.indexOf("http://") === 0 || string.indexOf("https://") === 0                                                  // Check if URL has HTTP or HTTPS
    return (check1 !== null && check2)                                                                                                  // Return True if both tests pass else false
};

export default isValidURL;                                                                                                              // Export Helper Function