@SDET
Feature: Test frontend suite for simple front end to perform UI tests.





    Scenario:  Active tab: From and To fields can't be empty and should be +ve numeric values.
        Given I open SDET Home Page
        And I click on the ADD OVERRIDE
        And I verify the text "Empty values are not allowed" value
        And I clear the input text in from feild
        Then I input the "-10" in the from Feild
        Then I verify the text "FROM level outside valid range" value
        And I clear the input text in from feild
        Then I input the "10" in the from Feild
        And I click on the ADD OVERRIDE
        Then I verify the text "Empty values are not allowed" value

    Scenario: Active tab - Asset drop-down can't be empty.
        Given I open SDET Home Page
        Then I input the "10" in the from Feild
        And I input the "10" in the To Feild
        # And I Enter the value as "05/23/2022 22:05" End date

        And I click on the ADD OVERRIDE
        Then I verify the text "Please select the asset" value



    Scenario: API Valiation - GET /intensity

        Given I launch the "https://api.carbonintensity.org.uk/intensity" url
        Then the HTML content is returned with a 200 code


    Scenario: API Valiation - GET /intensity/Date

        Given I launch the "https://api.carbonintensity.org.uk/intensity/date" url
        Then the HTML content is returned with a 200 code


    # Scenario: API Valiation - GET /intensity/Date

    #     Given I launch the "https://api.carbonintensity.org.uk/intensity/date/{2017-08-25}/{42}'" url
    #     Then the HTML content is returned with a 200 code