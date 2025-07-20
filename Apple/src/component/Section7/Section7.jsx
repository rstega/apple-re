import React from 'react'
import newipad from '../images/icons/new-ipad-logo.png';
export default function Section7() {
  return (
    <div>
        <section class="sixth-heghlight-wrapper"> 
			<div class="left-side-wrapper">
				<div class="model">
					16-inch model
				</div>

				<div class="product-title-small">
					MacBook Pro
				</div>

				<div class="description-wraper">
					The best for the brightest.
				</div>

				<div class="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>
			<div class="right-side-wrapper">
				<div class="top-logo-wrapper">
					<div class="logo-wrapper">
						<img src={newipad} alt="ipad logo" />
					</div>
				</div>

				<div class="description-wraper">
					Like a computer. Unlike any computer.
				</div>

				<div class="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>
    </div>
  )
}
