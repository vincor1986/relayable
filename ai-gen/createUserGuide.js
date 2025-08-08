const createUserGuide = {
  type: "function",
  strict: true,
  function: {
    name: "createUserGuide",
    description:
      "Creates a user guide that provides step-by-step instructions in how to perform a given task. This will be used by clients to deal with access-related tasks requested by their web developers.",
    parameters: {
      type: "object",
      properties: {
        title: {
          type: "string",
          description: "The title of the user guide.",
        },
        vendor: {
          type: "string",
          description:
            "The vendor for which the guide is created. For example, 'Heroku'.",
        },
        category: {
          type: "string",
          enum: ["Granting access", "Revoking access", "Other"],
          description:
            "The category of the guide. This must be one of the predefined categories which are: 'Granting access', 'Revoking access', 'Other'.",
        },
        description: {
          type: "string",
          description:
            "A brief description of what the guide enables the user to accomplish. For example: 'Adding a collaborator to a GitHub repository'.",
        },
        variables: {
          type: "array",
          description:
            "A list of variables that should be used in the guide. Variables are used to make the guide more dynamic and adaptable to different user needs. Each variable should have a unique name, a type, and a description. Additionally, variables can have variations if it is applicable (for an enum type variable) and can also be marked as required or optional and can be marked to accept multiple values for multiple selections. Each variable should not be something obvious to the user, (such as 'user_first_name') but something that the developer would need to inform the user to put in ('e.g. 'dev_username' or 'role' etc).",
          items: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description:
                  "The unique name of the variable. This should have no spaces and be lower case. For example: 'github_username'.",
              },
              type: {
                type: "string",
                enum: ["text", "number", "email", "boolean", "date", "enum"],
                description:
                  "The type of the variable. Can be 'text', 'number', 'email', 'boolean', 'date', or 'enum'.",
              },
              description: {
                type: "string",
                description:
                  "A brief description of what the variable is and what it is used for.",
              },
              variations: {
                type: "string",
                description:
                  "Possible values for enum type variables. This should be a comma-separated list of values. For example: 'admin, user, guest'.",
              },
              required: {
                type: "boolean",
                default: true,
                description: "Whether this variable is required or optional.",
              },
              multipleValues: {
                type: "boolean",
                default: false,
                description:
                  "Whether this variable can accept multiple values. For instance, this might apply if multiple permissions can be granted. This can only be set to true for enum type variables.",
              },
            },
            required: ["name", "type", "description", "required"],
          },
        },
        steps: {
          type: "array",
          description:
            "The steps to complete the task. This should start right at the beginning (for instance: 'Visit https://heroku.com and log in to your account'). Each step should be a string that describes what the user should do. Each step should be clear and concise and perform one action at a time.",
          items: {
            type: "string",
            description:
              "A step in the guide. If the step includes any variables, the variables should be insterted where relevant in the format '<<var:variable_name>>'. For example: Enter '<<var:email_address>>' into the 'email address' field.",
          },
        },
      },
      required: ["title", "vendor", "category", "description", "steps"],
    },
  },
};

module.exports = createUserGuide;
