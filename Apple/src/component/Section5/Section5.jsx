import React from 'react'
import AppleCard from '../images/home/apple-card.jpg';
import Watch from '../images/home/watch-series-5.jpg';
import wogo from '../images/icons/logo.svg';
 function Section5() {
  return (
    <div>
        <section class="fourth-heghlight-wrapper">
			<div class="left-side-wrapper">
				<div class="top-logo-wrapper">
					<div class="logo-wrapper">
						<img src={wogo} alt="Apple Card Logo" />
					</div>
				</div>
				<div class="description-wraper">
					With the new Always-On Retina display.<br /> s
					You’ve never seen a watch like this.
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
						<img src={wogo} alt="Apple Card Logo" />
					</div>
				</div>
				<div class="description-wraper">
					Get 3% Daily Cash on purchases from Apple using Apple Card.
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
export default Section5;