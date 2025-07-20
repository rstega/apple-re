import React from 'react'

import laptop from '../images/home/mac-laptop.jpg';
//               
 function Section2() {
  return (
    <div>
        <section class="main-highlight-wrapper">
			<div class="internal-wrapper"> 
				<div class="model">
					16-inch model
				</div>

				<div class="product-title">
					MacBook Pro
				</div>

				<div class="brief-description">
					The best for the brightest.
				</div>

				<div class="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>

				<div class="main-image-wrapper">
					<img src={laptop}/>
				</div>

			</div>
		</section> 
    </div>
  )
}
export default Section2;