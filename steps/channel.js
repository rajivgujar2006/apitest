import { Given, Then } from "@cucumber/cucumber";
import axios from "axios";
import { assert } from "chai"

let response, timeRequired, responseTime;

Given("I hit the channel endpoint {string}", async function (url) {
  var startTime  = new Date().getTime();
  response = await axios.get(url);
  responseTime  = new Date().getTime();
  timeRequired = responseTime - startTime;
});

Then ("the response status code should be {int}", function (statusCode) {
  assert.equal(response.status, statusCode, 'Status code is not '+ statusCode);
});

Then ("the response time should be below {int} milliseconds", function (expectedTime) {
  assert.isBelow(timeRequired, expectedTime, 'Time for api should be less than '+ expectedTime +' ms');
});

Then ("Verify in response {string} is not empty", function (attribute) {
 response.data.schedule.elements.forEach(element => {
    assert.isDefined(element[attribute], attribute + 'is undefined');
    assert.isNotNull(element[attribute], attribute + 'is null');
  });
});

Then ("Verify in response episode has type as {string}", function (expectedType) {
  response.data.schedule.elements.forEach(element => {
     assert.equal(element.episode.type, expectedType, 'episode type is not '+ expectedType);
  });
});

Then ("Verify in response for episode {string} is not empty", function (attribute) {
  response.data.schedule.elements.forEach(element => {
     assert.isDefined(element.episode[attribute], attribute + 'is undefined');
     assert.isNotNull(element.episode[attribute], attribute + 'is null');
   });
 });

 Then ("Verify in response only episode is live", function () {
  let countLive = 0;
  response.data.schedule.elements.forEach(element => {
    if(element.episode.live) countLive += 1; 
   });
   assert.equal(countLive, 1, 'More than one episodes live');
 });

 Then ("Verify transmission start date earlier to end date", function () {
  response.data.schedule.elements.forEach(element => {
    assert.isTrue(element.transmission_start < element.transmission_end, 'Transmission start date is greater than end date')
   });
 });

 Then ("Verify date in response header", function () {
  assert.exists(response.headers.date, 'Date does not exist in header')
  let headerDate = new Date(response.headers.date).getTime();
  let timeDifference = responseTime - headerDate;
  assert.isBelow(timeDifference, 3000, 'Header date looks older than 3000ms before response');
 });

 Given("I hit the invalid channel endpoint {string}", async function (url) {
  response = await axios.get(url).catch(function (error) {
      if (error.response) {
        return error.response;
      } 
  });
});

Then("Verify the error has expected details and code", function() {
  assert.include(response.data.error.details, 'Schedule not found for date', 'Error message is not as expected');
  assert.equal(response.data.error.http_response_code, 404, 'http_response_code is not 404');
 });
