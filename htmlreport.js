import reporter from 'cucumber-html-reporter';

var options = {
        theme: 'bootstrap',
        jsonFile: 'report/cucumber_report.json',
        output: 'report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Application": "IBL",
            "Assignment" : "API Testing"
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);