import React from 'react';
import {NavLink} from 'react-router-dom';

const baseClass = 'after-nav-links';

const AfterNavLinks: React.FC = () => {

    return (
        <div className={baseClass}>
            <nav>
                <NavLink
                    activeClassName="active"
                    to={'/admin/collections/translations?limit=100&page=1&where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5BStatus%5D%5Bequals%5D=candidate'}
                >
                    Candidates
                </NavLink>
                <NavLink
                    activeClassName="active"
                    to={'/admin/collections/translations?page=1&where%5Bor%5D%5B0%5D%5Band%5D%5B0%5D%5BStatus%5D%5Bequals%5D=approved'}
                >
                    Approved
                </NavLink>
            </nav>
        </div>
    );
};

export default AfterNavLinks;