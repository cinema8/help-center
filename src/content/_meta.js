import { GitHubIcon } from 'nextra/icons'
import { LinkArrowIcon } from 'nextra/icons'

const ExternalLink = ({ children }) => {
  return (
    <>
      {children}&thinsp;
      <LinkArrowIcon
        height="1em"
        className="x:inline x:align-baseline x:shrink-0"
      />
    </>
  );
};

export default {
   index: {
	   title : '',
	   display: 'hidden',
	   theme: {
	         sidebar: false,
			 navbar:false,
			 toc:false,
			 layout:'full',
			 footer:true,  
			 breadcrumb:false,
			 pagination:false,
			 typesetting: 'default' 
	       }
     },
	 'create-and-edit-videos': 'Create and edit videos',
	 'host-manage-and-customise': 'Host, manage and customise',
	 'engage-and-monetise': 'Engage and monetise',
	 'design-advanced-interactivity': 'Design advanced interactivity',
	 'share-videos-securely': 'Share videos securely',
	 'analyze-and-optimise': 'Analyze and optimise',
	 'integrations-and-third-party-platforms': 'Integrations and third-party platforms',
	 'advanced-tools-for-developers': 'Advanced tools for developers',
	 'accounts-and-billing': 'Accounts and billing',
	 demo: 	 {
		   display: 'hidden',
	 	   title : 'Demo',
  	      },
}

// No need for the custom Italic component anymore