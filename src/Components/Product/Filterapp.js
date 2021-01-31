import React from 'react'

const Filterapp = ({sorts, sorting,cat,filteringName}) => {
    return (
        <div>
            <div className="select_filter">
                {/* filtering by Price */}
          <select value={cat} onChange={filteringName}>
          <option value="">All Category</option>
          <option value="Best Selling">Best Selling</option>
          <option value="Most Popular">Most Popular</option>
         </select>  
        </div>

         {/* sorting */}
        <div className="select_filter">
          <select value={sorts} onChange={sorting}>
              <option value="all">All </option>
              <option value="low">Low</option>
             <option value="high">High</option>
         </select>  
         {sorts}
        </div>
        </div>
    )
}

export default Filterapp
