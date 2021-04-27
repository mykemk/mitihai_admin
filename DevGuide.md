## **Folder Structure**

The following is the folder structure:

* `build/` - Files generated after building the application by running `yarn build`
  
* `public/` - bublic assets
* `src/` - source code files for the application
  - `__tests__/` - Tests for the application
  - `app/` - app high level components
  - `assets/` - static assets for the application
  - `components/` - js and css styles for the various components
  
      -  `analysis/` - analysis and summary pages 
      - `auth/` - authentication components


      - `charts/` - various types of charts used to create the analysis files

      - `dashboard`/ - dashboard components


      - `events/` - events components
        
      - `faqs/` - components form components

      - `form-components/` - various components used to come up with various forms
        
      - `Groups/` - components for the 'groups' section of the application
        
      - `header/` - header components of the application
        
      - `members/` - Components for the members section of the dashboard
        
      - `navbar/` - Navbar components
        
      - `offers/` - componenst for the section of the application
     
      - `orders/` - components for the orders section of the application
        
      - `organization/` - organization components
        
      - `partners/` - partners section of the application
        
      - `product_categories/` - components for the product categories section
        
      - `products/` - products section components
        
      - `state-componets/` - components to indicate various state changes
        
      - `table-components/` - used to come up with various tables
        
      - `tables/` - tables components
        
      - `ui-utils/` - various utility components used in various sections of the design
        
      - `users/` - components for the user section
        
      - `vendors/` - vendors section of the application
  
  - `contexts/` - high lecel context files accessed by the varous elements in the application
  
  - `styles/` - stylesheet files
  
  - `test-data/` - mock data used at the various sections of the application
  
  - `utils/` - utility files, common funtions such as hooks accessed by the various elements of the application      
      - `components-utils/` - High order utility functions used to generate components with a common pattern
        
      - `hooks/` - common react hooks used to perform various operations in the files
      - `validations/` - contains form validation rules and callback functions
 
  - `index.css` 

* Each components folder has an `index.js` file used to export the various files/components in the folder

## **API and integration**
- The application is being served by an API accessed at: `https:www.mitihai.org/api`

## **Branches** 
The github repo has the following branches:

### **Main branches**
* `master` - main branch
* `deploy` - with changes ready for deployment
  
### **Feature branches**
* `design` - for performing various ui design integrations in the applications
* `api-integ` - when integrating various sections of the applications with the api

