<h1>Incident form</h1>
Client-side HTML/ JavaScript application that will consist of three tabs :<br>
1.General Information<br>
2.Corrective Actions<br>
3.REVIEW and SUBMIT<br>

“General Information” tab  contain a list of fields with different types/validation rules/specific behaviors (Appendix A).

“Corrective Actions” tab  contain a table, where user can perform adding new records, their next editing or deleting. Adding and Editing can be done in any possible way – e.g. via modal form or inline row editing.

“REVIEW and SUBMIT” tab  contain a list of all fields with entered values or validation errors (for invalid entered data). If all entered data is VALID, user can submit it .  The submit result SHOULD be a JSON in the specified format (Appendix B), which will be displayed in the new Browser window.

Application  support next browsers: IE9+, Google Chrome


Application is  using next components and libraries:
- AngularJS (It is desirable to use Angular routing for switching between tab)
- Twitter Bootstrap


Appendix A

<table>
    <tr>
        <th>Field</th>
        <th>Type</th>
        <th>Validation</th>
        <th>Behavior</th>
    </tr>
    <tr>
        <td>Date and Time of Incident</td>
        <td>Textbox + DateTimepicker</td>
        <td>required, DateTime format MM/dd/yyyy hh:mm AM/PM</td>
        <td></td>
    </tr>
    <tr>
        <td>Reported By</td>
        <td>Drop Down List</td>
        <td>required</td>
        <td></td>
    </tr>
    <tr>
        <td>Company of Reporter</td>
        <td>Drop Down List</td>
        <td>required</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>Contact Number</td>
        <td>Textbox</td>
        <td>required, U.S. phone regexp pattern	</td>
        <td></td>
    </tr>
    <tr>
        <td>Supervisor Name</td>
        <td>Textbox</td>
        <td></td>
        <td></td>
    </tr>

    <tr>
        <td>High Level Description of Incident</td>
        <td>Textarea</td>
        <td>required</td>
        <td></td>
    </tr>
    <tr>
        <td>Well Number</td>
        <td>Drop Down List</td>
        <td>required</td>
        <td>After selection, three fields below SHOULD be filled.
            <br> 
            Well-01 <br>
            Region: South, <br>
            State:Oklahoma, <br>
            Field Office:Ringwood <br>
            <br> 
            Well-02 <br>
            Region: North, <br>
            State: Montana, <br>
            Field Office: Sidney <br>
            <br> 
            Well-03 <br>
            Region: North, <br>
            State: North Dakota, <br>
            Field Office: Tioga</td>
    </tr>
    <tr>
        <td>Region</td>
        <td>Textbox</td>
        <td>readonly</td>
        <td></td>
    </tr>
    <tr>
        <td>State</td>
        <td>Textbox</td>
        <td>readonly</td>
        <td></td>
    </tr>
    <tr>
        <td>Field Office</td>
        <td>Textbox</td>
        <td>readonly</td>
        <td></td>
    </tr>
    <tr>
        <td>Incident Severity (Check all that Apply)</td>
        <td>Checkbox set</td>
        <td>at least one check required </td>
        <td>If “None Apply” was checked – all above checkboxes MUST be disabled.</td>
    </tr>
</table>

<pre>
{
    "workflowCreationInformation":{
        "workflowTypeName": "Incident Report",
        "name": "Report - 2013.05.09"
    },
    "workflowStepUpdateInformation":{
        "stepIdOrName": "Initial Step",
        "fields":[
            {"name":"Date and Time of Incident","values":["2013-05-13T15:40:00"]},
            {"name":"Reported By","values":["John Doe"]},
            {"name":"Company of Reporter","values":["CompanyA"]},
            {"name":"Contact Number","values":["405.234.9751"]},
            {"name":"Supervisor Name","values":["Aaron Moore"]},
            {"name":"High Level Description of Incident","values":["description"]},
            {"name":"Well Number","values":["Well-01"]},
            {"name":"Region","values":["South"]},
            {"name":"State","values":["Oklahoma"]},
            {"name":"Field Office","values":["Ringwood"]},
            {"name":"Incident Severity (Check all that Apply)","values":["Loss of well control", "Spill offsite > 50 Bbls"]},
            {"name":"Description of Corrective Action (1)","values":["description"]},
            {"name":"Action Taken By (name) (1)","values":["James Bucci"]},
            {"name":"Company (1)","values":["CompanyA"]},
            {"name":"Date (1)","values":["2013-05-22T09:00:00"]},
            {"name":"Description of Corrective Action (2)","values":["description"]},
            {"name":"Action Taken By (name) (2)","values":["Michael Mondt"]},
            {"name":"Company (2)","values":["CompanyB"]},
            {"name":"Date (2)","values":["2013-05-11T13:35:00"]}
        ]
    }
}
</pre>

