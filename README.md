# remote work resources frontend

https://remote-work-resources-2023.netlify.app/

Remote Work Resources is a dynamic web application curated to assist users in finding resources pertinent to remote work. The application is designed to allow users to search for, filter, and like different remote work resources, providing a user-friendly interface for ease of navigation and usability. Built using the data from the Remote Work Resources Public API that I developed. This API provides a collection of remote work resources, such as job boards, freelance platforms, and other useful links. It is publicly available, read-only, and does not require authentication. The API is built with Node.js, Express, and MongoDB.

#Functionalities

Searching: Users can perform textual searches to find resources based on their names.

Filtering: Users have the ability to filter resources based on different categories such as region, specialization, and categories like 'Job Board', 'Freelance Marketplace', etc. An option is provided to clear all applied filters, resetting the view to display all available resources.

View Toggling: The application provides toggle options allowing users to switch between grid and list views, offering flexibility in how the information is displayed.

Pagination: Pagination has been implemented to facilitate easy navigation through the list of resources.

Liking Resources: Users can like/unlike resources. Liked resources are highlighted, providing users a personalized experience. Liked resources are stored in the local storage of the browser, ensuring that the user’s preferences are saved between sessions.

Loading Spinner: A loading spinner is displayed while fetching resources, improving user experience by providing visual feedback during data retrieval.
