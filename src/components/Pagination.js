import React from 'react';
import '../styles/Pagination.css';

const Pagination = ({ currentPage, totalPages, goToPage, goToPrevPage, goToNextPage }) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={currentPage === i ? 'active' : ''}>
                    <button onClick={() => goToPage(i)}>{i}</button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav className="pagination">
            <ul>
                <li>
                    <button disabled={currentPage === 1} onClick={goToPrevPage}>
                        Prev
                    </button>
                </li>
                {renderPageNumbers()}
                <li>
                    <button disabled={currentPage === totalPages} onClick={goToNextPage}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
