(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return n})),i.d(t,"metadata",(function(){return r})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return d}));var s=i(2),a=i(9),c=(i(0),i(169)),o=(i(174),i(173),i(168)),n={id:"servicedesk-guide",title:"Acent Swap - Service Desk Guide",sidebar_label:"Acent Swap - Service Desk",hide_title:!0,hide_table_of_contents:!0,description:"Acent Swap - Service Desk Guide",keywords:["ACENT Exchange","$ACENT","@OfficialACENTDEX"],image:"/static/avax-logo.svg"},r={id:"sd/servicedesk-guide",title:"Acent Swap - Service Desk Guide",description:"Acent Swap - Service Desk Guide",source:"@site/docs\\sd\\servicedesk-guide.md",permalink:"/acent-docs/docs/sd/servicedesk-guide",editUrl:"https://github.com/acedefi/acent-docs/edit/main/docs/sd/servicedesk-guide.md",sidebar_label:"Acent Swap - Service Desk"},l=[{value:"Introduction",id:"introduction",children:[]},{value:"1. Ticket types and workflow",id:"1-ticket-types-and-workflow",children:[{value:"1.1 Ticket types and categories",id:"11-ticket-types-and-categories",children:[]},{value:"1.2 Tickets workflow",id:"12-tickets-workflow",children:[]},{value:"1.3 Automation for stuck TX tickets not closed after 7 days",id:"13-automation-for-stuck-tx-tickets-not-closed-after-7-days",children:[]}]},{value:"2. Configured queues for the service desk agents",id:"2-configured-queues-for-the-service-desk-agents",children:[{value:"2.1 Category Incident",id:"21-category-incident",children:[]},{value:"2.2 Category Changes",id:"22-category-changes",children:[]}]},{value:"3. Work process for the service desk",id:"3-work-process-for-the-service-desk",children:[{value:"3.1 Stuck transaction ticket",id:"31-stuck-transaction-ticket",children:[]},{value:"3.1 Bug report ticket",id:"31-bug-report-ticket",children:[]}]},{value:"4. UI improvement or feature request ticket",id:"4-ui-improvement-or-feature-request-ticket",children:[]}],u={rightToc:l};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"This page describes how to use the ticketing system:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Type of tickets"),Object(c.b)("li",{parentName:"ul"},"Edition of ticket states"),Object(c.b)("li",{parentName:"ul"},"Manage ticket queues")),Object(c.b)("p",null,Object(c.b)("a",Object(s.a)({parentName:"p"},{href:"/acent-docs/docs/sd/servicedesk-info"}),"Check this page")," for the description of the ticketing process."),Object(c.b)("h2",{id:"1-ticket-types-and-workflow"},"1. Ticket types and workflow"),Object(c.b)("h3",{id:"11-ticket-types-and-categories"},"1.1 Ticket types and categories"),Object(c.b)("p",null,"There are 4 types of tickets configured and grouped under two categories.  Each ticket has its specific fields (mandatory or optional) to be filled in by the user.",Object(c.b)("br",{parentName:"p"}),"\n","The user has to fill in an email address to be able to register the ticket: System doesn't check if it's a fake one or not, ticket will be registered anyway.  "),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide1.png")}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},'Category "Incidents":'),"  "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Stuck transaction"),Object(c.b)("li",{parentName:"ul"},"Bug report")),Object(c.b)("p",null,'Grouped under "Incidents" for the service desk agent (customer sees "Issue or bug registration").'),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},'Category "Changes":')),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"UI improvement"),Object(c.b)("li",{parentName:"ul"},"Feature suggestion")),Object(c.b)("p",null,'Grouped under "Changes" for the service desk agent (customer sees "Improvement or feature suggestion").'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"I'm using a free plan for this software, it seems I can't delete the other categories imposed on the interface, nor rename any of them to anything else.")),Object(c.b)("h3",{id:"12-tickets-workflow"},"1.2 Tickets workflow"),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide2.jpg")}),Object(c.b)("p",null,"All the ticket types follow the same workflow, with the following states:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'"New": Ticket created, and no one (community mod or dev team) has yet acknowledged/processed it'),Object(c.b)("li",{parentName:"ul"},'"Community mods": Ticket picked up by a community mod for 1st evaluation'),Object(c.b)("li",{parentName:"ul"},'"Escalated to Discord": To trigger sending a mail notification to the dev team with failed cross chain details'),Object(c.b)("li",{parentName:"ul"},'"Done": Ticket closed')),Object(c.b)("p",null,"The customer receives a mail after some state changes, but they won't see the exact status name like the service desk agent:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'For all ticket types except stuck transactions, customer will only see "New" and "Registered" as state'),Object(c.b)("li",{parentName:"ul"},'For a stuck transaction, customer will see "New", "Registered" and "Closed"')),Object(c.b)("h3",{id:"13-automation-for-stuck-tx-tickets-not-closed-after-7-days"},"1.3 Automation for stuck TX tickets not closed after 7 days"),Object(c.b)("p",null,"Idea is not to exchange/communicate information at the moment with the users through the ticketing system: They register their tickets and they have to go to the Telegram main chat if they want additional information."),Object(c.b)("p",null,"Tickets regarding stuck transactions will be automatically closed after 7 days regardless of their state.  Assumption is by then, the issue has been resolved."),Object(c.b)("h2",{id:"2-configured-queues-for-the-service-desk-agents"},"2. Configured queues for the service desk agents"),Object(c.b)("p",null,"Queues contains type of incidents or suggestions, filtered on their state for quick access and overview.",Object(c.b)("br",{parentName:"p"}),"\n","There are separate queues for each type of ticket of this category (stuck transaction, bug report), filtered on their state."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},'I\'m using a free plan for this software, it seems I can\'t delete/rename "Team priority" or disable the feature "Major Incidents", which we won\'t use for the moment.')),Object(c.b)("h3",{id:"21-category-incident"},"2.1 Category Incident"),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide3.png")}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Queues:")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},'"New stuck transactions": New tickets registered by the customer, in state "New"'),Object(c.b)("li",{parentName:"ol"},'"Community mods stuck transactions": New tickets acknowledged by the community mods and who changed the state to "Community mods" '),Object(c.b)("li",{parentName:"ol"},'"Discord mods stuck transactions": Tickets escalated by the community mods to the dev team, state changed to "Escalated to discord".  '),Object(c.b)("li",{parentName:"ol"},'"Closed stuck transactions": Stuck transaction closed (changed to status "Done") manually or automatically by the system 7 days after ticket creation'),Object(c.b)("li",{parentName:"ol"},'"New reported bug": New bug registered by the customer, in state "New"'),Object(c.b)("li",{parentName:"ol"},'"Ongoing reported bugs": Bugs in state "Community mods" or "Escalated to Discord"'),Object(c.b)("li",{parentName:"ol"},'"Closed reported bugs": Bugs in state "Done"')),Object(c.b)("h3",{id:"22-category-changes"},"2.2 Category Changes"),Object(c.b)("p",null,"The 2 ticket types (UI improvement, feature suggestion) are in the same queues, only being filtered on their state.  "),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide4.png")}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Queues:")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},'"New UI improvement/feature suggestions": Tickets in state "New"'),Object(c.b)("li",{parentName:"ol"},'"Ongoing UI improvement/features suggestions": Tickets in state "Community mods" or "Escalated to "Discord"'),Object(c.b)("li",{parentName:"ol"},'"Closed/registered UI improvement/features suggestions": Tickets in state "Done"')),Object(c.b)("h2",{id:"3-work-process-for-the-service-desk"},"3. Work process for the service desk"),Object(c.b)("h3",{id:"31-stuck-transaction-ticket"},"3.1 Stuck transaction ticket"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},'Check the queue "New stuck transactions" (1)  ')),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide3.png")}),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},'List of stuck transactions in status "New", not processed by anyone: Columns inform about type of incident (in this case, only stuck transactions, identified with its specific icon), creation date, cross-chain direction, reporter (= email entered by the customer), state, etc.',Object(c.b)("br",{parentName:"li"}),"Clicking on the Key or Summary opens the ticket details:  ")),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide5.png")}),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},'You can check the stuck TX ID, cross-chain direction, etc information as entered by the user.  Change the state to "Community mods" (top right)  so that another mod doesn\'t look at the same ticket at the same time thinking that no one else has/is looking at it.  ')),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide6.png")}),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},'When the state is changed to "Community mods", the ticket is moved automatically to the queue "Community mod stuck transactions" (2)  ')),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide3.png")}),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},'Closing the ticket: In the queues "Community mods" change the state to "Done" manually if you had a contact with the user who confirmed that the issue was resolved.  Or wait for the system to close it automatically 7 days after ticket creation regardless of its state.  ')),Object(c.b)("h3",{id:"31-bug-report-ticket"},"3.1 Bug report ticket"),Object(c.b)("p",null,"Queues (5) > (7):  "),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide3.png")}),Object(c.b)("p",null,"Same state and workflow as for stuck transactions, except:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},'More relaxed follow-up: After you have decided what to do with the ticket (inform in Discord or not for example), change the state to "Done".  User will only see "New" and "Registered" as states of a bug report')),Object(c.b)("h2",{id:"4-ui-improvement-or-feature-request-ticket"},"4. UI improvement or feature request ticket"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},'Click on "Back to project" to come back to the main page:  ')),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide7.png")}),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},'Go to "Changes":  ')),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide1.png")}),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},"Three queues, the working process is the same as for bug report tickets:  ")),Object(c.b)("img",{alt:"Picture",src:Object(o.a)("/img/sd/guide4.png")}))}d.isMDXComponent=!0}}]);