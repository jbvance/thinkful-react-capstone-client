# EstateDox - [https://estatedox.netlify.com](https://estatedox.netlify.com)

[Code repository for server can be found here](https://github.com/jbvance/thinkful-react-capstone-server)

A web-based application that lets you create a durable power of attorney by completing a simple wizard. Simply fill in the
relevant information, and you will be able to create and download a Microsoft Word version of the completed document. A durable power of attorney
is a legal document that allows you to name the peron(s) who will manage your financial affairs if you become incapacitated. Every state has
a statutory durable power of attorney form, and the one used here is based on Texas law. Please note that the website is for demonstration
purposes only and should not be relied upon for creating any binding legal documents.

* Built using the MERN stack (MongoDB, Express, React, and Node.js).

Login
=====

![Caption of Login screen](public/images/tutorial/estate-dox-login.gif)

Enter your information
==================================

* Enter your name and address to be used to complete your document.
  
![Enter your name and address](public/images/tutorial/estate-dox-step-1.gif)

Enter your agents
==================================

* Your agent is the person responsible for managing your affairs if you are incapacitated.
* You must enter at least one agent.
* If you list more than one agent (which is recommended), they will serve in the order listed. If your first listed agent dies or is unable to act on your behalf, the second agent will then serve, etc.

  
  
![Enter your agents](public/images/tutorial/estate-dox-step-2.gif)

Select when your document should become effective and submit the form. That's it!
================

*  If you select "Effective only upon my disability", your agent(s) will not be able to act on your behalf until your doctor has determined that you are unable to manage your own affairs.

* If you select "Effective Immediately", your agent will be able to act on your behalf as soon as you sign the document, and the document will remain in effect during any subsequent disability.

![Select when document becomes effective](public/images/tutorial/estate-dox-step-3.gif)
