import React from 'react';
import "./Article.css";
import Card from "../CommonCompontents/Card";
import Button from "../CommonCompontents/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Article = () => {
  return (
    <div className='Article'>
      <div className="container">
        <div className="article__main">
          <h3 className='article__text'>Digital Marketing Articles</h3>
          <Card className="ArticleWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
              <Button btnstyle="ArticleWrapperBtn">
                  Read More <MdOutlineKeyboardArrowRight className='ArticleWrapperIcon' />
              </Button>
          </Card>
          <Card className="ArticleWrapper" CardWrapper__title="12 Best SaaS WordPress Themes To" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
              <Button btnstyle="ArticleWrapperBtn">
                  Read More <MdOutlineKeyboardArrowRight className='ArticleWrapperIcon' />
              </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Article;
