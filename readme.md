### Source code for Personal Portfolio website
#### Website URL: https://antariksh.kesug.com

#

Install Angular CLI (Version 15)
> npm install -g @angular/cli@15

Create a new Angular Project
> ng new portfolio

Build the Application's output (For Deployment)
> ng build

Added ngx bootstrap
> ng add ngx-bootstrap

To create a new component 
> ng generate component component_name --skip-tests (dont create test files for static data like headers/footers)
> ng g c new_component (short form)

To create a new service (Service - An Injectable .ts file that is not associated with html/css files)
> ng generate service resume_service
> ng g s resume_service (short form)


To add modals component dependency from ngx-bootstrap </br>
(Documentation: https://valor-software.com/ngx-bootstrap/#/components)
> ng add ngx-bootstrap  --component modals



