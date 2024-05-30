
// JavaScript to handle the toggle effect for the sidebar on mobile
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const dynamicContentContainer = document.getElementById('dynamicContent');

// Event listener for the menu icon
menuIcon.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'none' || sidebar.style.display === '' ? 'block' : 'none';
});

// Event listener for clicks outside the sidebar to hide it
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickInsideMenuIcon = menuIcon.contains(event.target);

    // Hide the sidebar if the click is outside the sidebar and not on the menu icon
    if (!isClickInsideSidebar && !isClickInsideMenuIcon) {
        sidebar.style.display = 'none';
    }
});

// JavaScript to handle the toggle effect for all sidebar items (except Logout)
const toggleContentItems = document.querySelectorAll('.toggle-content');

// Add click event listener to each sidebar item
toggleContentItems.forEach(item => {
    item.addEventListener('click', () => {
        // Hide the sidebar on mobile view
        if (window.innerWidth <= 768) {
            sidebar.style.display = 'none';
        }

        // Display the dynamic content container when a sidebar item is clicked
        dynamicContentContainer.style.display = 'block';

        // Handle specific content based on the clicked item
        if (item.textContent === 'Purchased Songs') {
            // Here, you would dynamically fetch and display the actual purchased songs
            // For simplicity, let's add some sample content
            dynamicContentContainer.innerHTML = `
                <h2 class="text-xl font-semibold mb-2">Purchased Songs</h2>
                <ul>
                    <li>Purchased Song 1</li>
                    <li>Purchased Song 2</li>
                    <!-- Add more items dynamically based on purchased songs -->
                </ul>
            `;
        } else {
            // For other items, display a generic message
            dynamicContentContainer.innerHTML = `
                <h2 class="text-xl font-semibold mb-2">${item.textContent}</h2>
                <p>This is the content for ${item.textContent}.</p>
            `;
        }
    });
});
