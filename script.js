
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");
    const content = document.getElementById("content");

    // Toggle sidebar
    toggleBtn.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle("open"); // For mobile
      } else {
        sidebar.classList.toggle("closed"); // For desktop
      }
    });

    // Pages content
    const pages = {
      home: "<h1>Home</h1><p>Welcome to the home page.</p>",
      profile: "<h1>Profile</h1><p>This is your profile section.</p>",
      settings: "<h1>Settings</h1><p>Here you can change your preferences.</p>",
      about: "<h1>About</h1><p>This is a collapsible sidebar demo.</p>",
      logout: "<h1>Logout</h1><p>You have been logged out (demo).</p>",
    };

    // Handle link clicks
    document.querySelectorAll(".sidebar ul li").forEach(item => {
      item.addEventListener("click", () => {
        const page = item.getAttribute("data-page");
        content.innerHTML = pages[page];
        
        // Auto-close sidebar on mobile after click
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("open");
        }
      });
    });

