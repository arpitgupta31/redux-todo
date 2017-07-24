import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL" selector="All">
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE" selector="Active" >
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED" selector="Completed">
      Completed
    </FilterLink>
  </p>
);

export default Footer;