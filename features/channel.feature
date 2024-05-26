Feature: TV channel valid scenario test
 
  Scenario: For a tv channel verify the request response and time taken
    Given I hit the channel endpoint "https://testapi.io/api/RMSTest/ibltest"
    Then the response status code should be 200
    And the response time should be below 1000 milliseconds
    
  Scenario: Verify that id has a value and type in episode is always episode data array and id field
    Given I hit the channel endpoint "https://testapi.io/api/RMSTest/ibltest"
    Then Verify in response "id" is not empty
    Then Verify in response episode has type as "episode"
      
  Scenario: Verify that title field in episode is never empty
    Given I hit the channel endpoint "https://testapi.io/api/RMSTest/ibltest"
    Then Verify in response for episode "title" is not empty

  Scenario: Verify that title field in episode is never empty
    Given I hit the channel endpoint "https://testapi.io/api/RMSTest/ibltest"
    Then Verify in response only episode is live
     
  Scenario: Verify transmission start date is earlier to transmission end date
    Given I hit the channel endpoint "https://testapi.io/api/RMSTest/ibltest"
    Then Verify transmission start date earlier to end date

  Scenario: Verify date in header
    Given I hit the channel endpoint "https://testapi.io/api/RMSTest/ibltest"
    Then Verify date in response header

  Scenario: Verify error code and error details
    Given I hit the invalid channel endpoint "https://testapi.io/api/RMSTest/ibltest/2023-09-11"
    Then the response status code should be 404
    And Verify the error has expected details and code
      