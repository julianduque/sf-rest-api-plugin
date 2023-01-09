# summary

A Salesforce REST API plugin

# description

Make authenticated Salesforce REST API requests to your org.

# args.path.summary

REST API path.

# flags.targetorg.summary

Login username or alias for the target org.

# flags.method.summary

HTTP method.

# flags.contenttype.summary

HTTP content-type header.

# flags.payload.summary

HTTP payload.

# flags.apiversion.summary

Override the api version

# examples

- <%= config.bin %> <%= command.id %> /limits --target-org myorg
- <%= config.bin %> <%= command.id %> /sobject/Account -o myorg -m POST -p '{"Name":"Acme Inc."}'
- <%= config.bin %> <%= command.id %> /sobject/Account -o myorg -m POST -p '<Account><Name>Acme Inc.</Name></Account>' -t application/xml
