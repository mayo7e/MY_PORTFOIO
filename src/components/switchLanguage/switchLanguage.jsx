
import React from 'react';
import i18n from 'i18next';
// import i18n from '../../i18n/i18n';


import { LanguageSwitcherContainer, LanguageSwitcher, Text } from './switchLanguageStye';


export const SwitchLanguages = (newLanguage)=>{
  i18n.changeLanguage(newLanguage);
  console.log(newLanguage)
}

// Language switcher function
 export const LanguageTabMenu = () => {
 

    return (
        <LanguageSwitcherContainer>
        {/* <Text>yooo</Text> */}

          <LanguageSwitcher onChange={(e) => SwitchLanguages(e.target.value)}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </LanguageSwitcher>
      </LanguageSwitcherContainer>
    )

};

