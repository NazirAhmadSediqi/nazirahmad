$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/RetailPage.feature");
formatter.feature({
  "line": 1,
  "name": "Retail Website Features",
  "description": "",
  "id": "retail-website-features",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2622198800,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "#Every feature file starts with Feature: \u003cName of feature file\u003e"
    },
    {
      "line": 4,
      "value": "#Every Scenario starts with Scenario: \u003cName of Test case we want to automate\u003e"
    },
    {
      "line": 5,
      "value": "#Gherkin keywords are Given When Then"
    },
    {
      "line": 6,
      "value": "#Given is precondition"
    },
    {
      "line": 7,
      "value": "#When is an Action taken"
    },
    {
      "line": 8,
      "value": "#Then is an expected result (usually we write validation)"
    },
    {
      "line": 9,
      "value": "#And is repeating an action or can be used following Given keyword as well"
    },
    {
      "line": 10,
      "value": "#But is used for negative scenarios verification"
    }
  ],
  "line": 12,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 13,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2242541700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Register and Account test case",
  "description": "",
  "id": "retail-website-features;register-and-account-test-case",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@RegisterTest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User click  on MyAccount",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User click on Register option",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User fill the Registration form with Below information",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "telephone",
        "password",
        "confirmPassword",
        "subscribe"
      ],
      "line": 45
    },
    {
      "cells": [
        "David",
        "John",
        "david.john@gmail.com",
        "1214151920",
        "tesst",
        "tesst",
        "no"
      ],
      "line": 46
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user acceptthe privacy and policy",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User should be registered in Retail Website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 64254100,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Register_option()"
});
formatter.result({
  "duration": 659495800,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_fill_the_Registration_form_with_Below_information(DataTable)"
});
formatter.result({
  "duration": 783613300,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_acceptthe_privacy_and_policy()"
});
formatter.result({
  "duration": 410780900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_click_on_Continue_button()"
});
formatter.result({
  "duration": 504792900,
  "status": "passed"
});
formatter.match({
  "location": "RetailPageTestStepDefinitions.user_should_be_registered_in_Retail_Website()"
});
formatter.result({
  "duration": 333196500,
  "status": "passed"
});
formatter.after({
  "duration": 1226268900,
  "status": "passed"
});
});