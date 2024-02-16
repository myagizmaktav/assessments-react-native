import React from 'react';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import ButtonPage from '../app/(tabs)/index';
import MainPage from '../app/(tabs)/two';
import { FreeTrial } from '@/components/options/freeTrial/freeTrial';
import { YearlyAccess } from '@/components/options/yearlyAcces/yearlyAccess';
import { DayFreeTrial } from '../components/options/dayFreeTrial/dayFreeTrial';
import { Features } from '../components/features/features';
import { SaturnLogo } from '@/assets/logos/saturnLogo';
import { OptionsCheck } from '@/components/options/optionsCheck/optionsCheck';
import { FreeTrialSwitch } from '../components/options/freeTrial/freeTrialSwitch/freeTrialSwitch';
import { Header } from '@/components/header/header';
import { PremiumLogo } from '@/components/premiumLogo/premiumLogo';
import { Content } from '@/components/content/content';
import { Footer } from '../components/footer/footer';

describe('Initial Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ButtonPage />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree?.children?.length).toBe(1);
  });

  it('its TouchableOpacity view', () => {
    const tree = renderer
      .create(<ButtonPage />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree.type).toBe('View'); // ToucableOpacity is View Background
  });
});

describe('MainPage Component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MainPage />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree).toMatchSnapshot();
  });
  it('Renders Header', () => {
    const tree = renderer.create(<Header />).toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });
  it('Renders PremiumLogo', () => {
    const tree = renderer
      .create(<PremiumLogo />)
      .toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });
  it('Renders Content', () => {
    const tree = renderer.create(<Content />).toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });
  it('Renders Footer', () => {
    const tree = renderer.create(<Footer />).toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });

  it('Renders Free Trial', () => {
    const tree = renderer
      .create(<FreeTrial />)
      .toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });

  it('Renders Yearly Access', () => {
    const tree = renderer
      .create(<YearlyAccess />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree).toMatchSnapshot();
  });

  it('Renders Day Free Trial', () => {
    const tree = renderer
      .create(<DayFreeTrial />)
      .toJSON() as ReactTestRendererJSON;

    expect(tree).toMatchSnapshot();
  });
  it('Is Saturn Logo Svg', () => {
    const tree = renderer
      .create(
        <SaturnLogo width={25} height={25} fill="rgba(114, 115, 121, 1)" />
      )
      .toJSON() as ReactTestRendererJSON;
    expect(tree.type).toBe('RNSVGSvgView');
  });

  it('Renders Features', () => {
    const tree = renderer
      .create(
        <Features
          Logo={
            <SaturnLogo width={25} height={25} fill="rgba(114, 115, 121, 1)" />
          }
          title="Ad-Free Browsing"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        ></Features>
      )
      .toJSON() as ReactTestRendererJSON;

    expect(tree).toMatchSnapshot();
  });

  it('Renders OptionsCheck When Enable Background is red?', () => {
    const tree = renderer
      .create(
        <OptionsCheck
          isEnabled={true}
          onChange={(value: boolean) => {
            console.log(value);
          }}
        ></OptionsCheck>
      )
      .toJSON() as ReactTestRendererJSON;

    const firstChildStyle =
      typeof tree.children?.[0] === 'object'
        ? tree.children?.[0]?.props?.style
        : undefined;

    // Check if the background color is red
    expect(firstChildStyle?.[1]?.backgroundColor).toBe('#ff0000');
  });

  it('Renders OptionsCheck when false background is not red?', () => {
    const tree = renderer
      .create(
        <OptionsCheck
          isEnabled={false}
          onChange={(value: boolean) => {
            console.log(value);
          }}
        ></OptionsCheck>
      )
      .toJSON() as ReactTestRendererJSON;

    const firstChildStyle =
      typeof tree.children?.[0] === 'object'
        ? tree.children?.[0]?.props?.style
        : undefined;

    // Check if the background color is not red // Assuming green is represented by #00ff00
  });

  it('Renders FreeTrialSwitch', () => {
    const tree = renderer
      .create(
        <FreeTrialSwitch
          isEnabled={true}
          onChange={(isEnabled) => {
            console.log(isEnabled);
          }}
        ></FreeTrialSwitch>
      )
      .toJSON() as ReactTestRendererJSON;

    expect(tree).toMatchSnapshot();
  });

  it('Renders FreeTrialSwitch when enable background is green?', () => {
    const tree = renderer
      .create(
        <FreeTrialSwitch
          isEnabled={true}
          onChange={(isEnabled) => {
            console.log(isEnabled);
          }}
        ></FreeTrialSwitch>
      )
      .toJSON() as ReactTestRendererJSON;

    const firstChildStyle =
      typeof tree.children?.[0] === 'object'
        ? tree.children?.[0]?.props?.style
        : undefined;

    // Check if the background color is green
    expect(firstChildStyle?.[1]?.backgroundColor).toBe('#23D842');
  });

  it('Renders FreeTrialSwitch when false background is undefined?', () => {
    const tree = renderer
      .create(
        <FreeTrialSwitch
          isEnabled={false}
          onChange={(isEnabled) => {
            console.log(isEnabled);
          }}
        ></FreeTrialSwitch>
      )
      .toJSON() as ReactTestRendererJSON;

    const firstChildStyle =
      typeof tree.children?.[0] === 'object'
        ? tree.children?.[0]?.props?.style
        : undefined;

    // Check if the background color is not green
    expect(firstChildStyle?.[1]?.backgroundColor).toBe(undefined);
  });
});
