import React from 'react'
import { Button } from '../../globalStyles'
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa'
import {
	FooterContainer,
	FooterSubscription,
	FooterSubText,
	FooterSubHeading,
	Form,
	FormInput,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './Footer.elements'

function Footer() {
	return (
		<FooterContainer>
			<FooterSubscription>
				<FooterSubHeading>
					Join our exclusive membership to receive the latest news and trends
				</FooterSubHeading>
				<FooterSubText>You can unsubscribe at any time.</FooterSubText>
				<Form>
					<FormInput name="email" type="email" placeholder="Your Email" />
					<Button fontBig>Subscribe</Button>
				</Form>
			</FooterSubscription>
			<SocialMedia>
				<SocialMediaWrap>
					<SocialLogo to="/">
						<SocialIcon />
						Sauti.
					</SocialLogo>
					<WebsiteRights>SAUTI. © 2020</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="/" target="_blank" aria-label="Facebook">
							<FaFacebook />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Instagram">
							<FaInstagram />
						</SocialIconLink>
						<SocialIconLink
							href={'//www.youtube.com'}
							rel="noopener noreferrer"
							target="_blank"
							aria-label="Youtube"
						>
							<FaYoutube />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="Twitter">
							<FaTwitter />
						</SocialIconLink>
						<SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	)
}

export default Footer
