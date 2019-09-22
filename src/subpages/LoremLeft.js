import React from 'react';
import LoremLeftMain from './LoremLeftMain';
import ArticleInfoFirst from './ArticleInfoFirst';
import ArticleInfoSecond from './ArticleInfoSecond';
import UsefulLinks from './UsefulLinks'

const LoremLeft = () => {
    return (
        <>
            <div className="loremLeftMain">
                <LoremLeftMain />
            </div>
            <div className="articleInfoFirst"><ArticleInfoFirst /></div>
            <div className="articleInfoSecond"><ArticleInfoSecond /></div>
            <div className="usefulLinks"><UsefulLinks /></div>
        </>
    )
}
export default LoremLeft;