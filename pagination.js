// JavaScript for Pagination
const paginationContainer = document.getElementById('pagination-container');

// Total number of pages
const totalPages = 10;

// Current active page (initially set to 1)
let currentPage = 1;

// Function to generate pagination
function generatePagination() {
  const pagination = document.createElement('ul');
  pagination.classList.add('pagination');

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    pageLink.addEventListener('click', () => onPageClick(i));
    pageItem.appendChild(pageLink);
    pagination.appendChild(pageItem);
  }

  paginationContainer.innerHTML = '';
  paginationContainer.appendChild(pagination);
  highlightCurrentPage();
}

// Function to handle page click
function onPageClick(pageNumber) {
  currentPage = pageNumber;
  generatePagination();
}

// Function to highlight the current active page
function highlightCurrentPage() {
  const paginationItems = paginationContainer.querySelectorAll('.pagination li');
  paginationItems.forEach(item => {
    const pageLink = item.querySelector('a');
    const pageNumber = parseInt(pageLink.textContent);
    if (pageNumber === currentPage) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Initialize pagination
generatePagination();
