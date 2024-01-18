import React from 'react';
import "./BusinessCard.css";
import Card from '../CommonCompontents/Card';
import Button from '../CommonCompontents/Button';
import { MdKeyboardArrowRight } from "react-icons/md";
const BusinessCard = () => {
  return (
    <div className='BusinessCard'>
      <div className="container">
        <div className="Business__wrapper">

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>

        <Card className="CardWrapper" CardWrapper__title="Top 5 SaaS Businesses – August 2021" CardWrapper__details="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS">
            <Button btnstyle="CardBtn">
            Read More <MdKeyboardArrowRight className='ReadMoreIcon' />
            </Button>
        </Card>


        </div>
        <div className="navigation__main">
            <div className="navigation__second">
                <div className="pre__name">Preview</div>
                <div className="number">
                    <ul className='numberUnList'>
                        <li className='numberList'><a href="#">1</a></li>
                        <li className='numberList'><a href="#">2</a></li>
                        <li className='numberList'><a href="#">3</a></li>
                        <li className='numberList'><a href="#">4</a></li>
                        <li className='numberList'><a href="#">5</a></li>
                    </ul>
                </div>
                <div className="next__name">Next</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard;
