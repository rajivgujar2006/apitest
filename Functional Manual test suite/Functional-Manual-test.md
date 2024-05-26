Functional Manual Testing for TV Channel API’s

1. Title: Verify that API response shows status code 200 and get executed within 1000 milliseconds. 

Repro Steps: 
• Launch API in chrome browser https://testapi.io/api/RMSTest/ibltest
• Observer the behaviour.

Expected Result:
• Verify that API response shows status code 200 and get executed within 1000 milliseconds.


2. Title: Channel API response should have schedule data structure.

Pre-requisite:
• Install postman tools.

Repro Steps: 
• Launch postman tool.
• Create a “GET” request for api endpoint https://testapi.io/api/RMSTest/ibltest
• Save the request and click on send button.
• Observe the response

Expected Result:
• Verify that the response should be shown in JSON format.
• Verify that below should structure field are shown. 
"id": "bbc_one_london",
        "type": "channel",
        "title": "BBC One",
        "has_schedule": true,
        "master_brand_id": "bbc_one",
        "master_brand_title": "BBC One

Additional Information:
• Verify all the elements and sub-elements have appropriate values.
• Verify that none of the elements are null or empty as per acceptance criteria.

3. Title: Verify API request on local terminal with CURL.

Pre-requisite:
• Install postman tools.

Repro Steps: 
• Launch postman tool.
• Create a Get request for Api endpoint https://testapi.io/api/RMSTest/ibltest
• From postman copy the CURL command and execute it on a terminal locally
• Observe the response

Expected Result:
• With CURL command we should be able to get required response with all data structure.
