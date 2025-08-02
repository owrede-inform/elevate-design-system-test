import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/components/Layouts/Homepage';
import { calloutLink } from './Homepage.module.scss';

import CloudsBackground from './clouds.png';

const FirstLeftText = () => <p>Built on Principles</p>;

const FirstRightText = () => (
  <p>
    <strong>Shared Value. Community Input. Inverted Control.</strong> We prioritize accessibility, 
    consider system-wide impact, and put control in your hands. Every component is designed 
    to balance consistency with flexibility—letting teams build faster while maintaining 
    INFORM's brand standards.
    <a
      className={calloutLink}
      href="/getting-started">
      Explore principles →
    </a>
  </p>
);

const SecondLeftText = () => <p>Web Components Ecosystem</p>;

const SecondRightText = () => (
  <p>
    <strong>40+ Components. 3-Tier Design Tokens. Custom Icons.</strong> From buttons to complex tables, 
    each element follows W3C Web Components standards. Built for composability, not rigid templates—
    giving you the building blocks to craft exceptional user experiences.
    <a
      className={calloutLink}
      href="https://github.com/inform-elevate/elevate-core-ui">
      Browse components →
    </a>
  </p>
);

const BannerText = () => (
  <div style={{ 
    marginTop: '-4rem', 
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
  }}>
    <h1 style={{ 
      color: '#262626',
      fontWeight: '700',
      fontSize: '4rem',
      marginBottom: '1rem',
      textShadow: '0 2px 8px rgba(0,0,0,0.2)'
    }}>
      ELEVATE Design System
    </h1>
    <p style={{ 
      fontSize: '1.5rem', 
      color: '#393939',
      fontWeight: '500',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.4',
      textShadow: '0 1px 4px rgba(0,0,0,0.1)'
    }}>
      Empowering INFORM teams to build the future of enterprise software
    </p>
  </div>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={CloudsBackground} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#0090a7"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#004759"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
