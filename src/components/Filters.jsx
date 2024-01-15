import React from 'react';

function Filters({filterData, category, setCategory}) {
    
    function filterHandler(title) {
        setCategory(title)
        console.log(category)
    }

    return(
        <div className='btn-parent'> 
            {filterData.map((data) => {
                return (
                <button className='filter-btn' key={data.id} onClick={() => filterHandler(data.title)}>
                    {data.title}
                </button>
                )
            })}
        </div>
    )
}

export default Filters;