import React from 'react';

import './index.css'

import { HelpContent } from './components/HelpContent/'
import { HelpFooter } from './components/HelpFooter/'
import { HelpForm } from './components/HelpForm/'


export const Help = (props) => {
  return (
    <div className="help">
        <div className="help-wrapper">
        	<div className="help-header">
            <h3 className="help-header__title">Help</h3>
            <h5 className="help-header__subtitle">5 Frequently asked questions</h5>
        	</div>
            <HelpContent />
            <HelpFooter />
        </div>
            <HelpForm />
        </div>
  )
}