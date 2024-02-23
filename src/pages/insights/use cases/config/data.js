export const headers = [
    {
        header: "AWS Config Service Delivery",
        paragraph: "AWS Config gives you the ability to assess, audit, and evaluate configurations of your resources. It tracks and stores configuration history of your AWS resources, software and tracks relationships of AWS resources in your account. It gives you pre-built rules for evaluating, provisioning and configuring your AWS resources. Conformance packs help you manage compliance of your AWS resource configuration at scale–from policy definition to auditing and aggregated reporting–using a common framework and packaging model. Using AWS Config, you can have centralized auditing and governance with multi account and multi region data aggregation. It gives you an enterprise-wide view of your AWS Config rule compliance status, and you can associate your AWS organization to quickly add your accounts. You can even publish the configuration of third-party resources into AWS Config using publicly available APIs. Third-party resources could be version control systems such as GitHub, Microsoft Active Directory resources or even on-premise servers. You can create configuration snapshots, which is a point in time capture of all your resources and configurations. This can be generated via the CLI or API calls, and is delivered to an S3 bucket of your choice.",                 
    }
]

export const useCases =[
    {
        header: "Track Changes",
        sub_header: "Configuration history",
        paragraph: "AWS Config records details of changes to your AWS resources to provide you with a configuration history. You can use the AWS Management Console, API, or CLI to obtain details of what a resource’s configuration looked like at any point in the past. AWS Config will also automatically deliver a configuration history file to the Amazon S3 bucket you specify.",
    },
    {
        header: "Map your Resources",
        sub_header: "Resource relationships",
        paragraph: "AWS Config discovers, maps, and tracks AWS resource relationships in your account. For example, if a new Amazon EC2 security group is associated with an Amazon EC2 instance, AWS Config records the updated configurations of both the Amazon EC2 security group and the Amazon EC2 instance.",
    },
    {
        header: "Ensure Conformity",
        sub_header: "Conformance packs",
        paragraph: "Conformance packs help you manage compliance of your AWS resource configuration at scale–from policy definition to auditing and aggregated reporting–using a common framework and packaging model. Conformance packs are integrated with AWS Organizations. Using conformance packs as your compliance framework, you can package a collection of AWS Config rules and remediation actions into a single entity (known as a conformance pack) and deploy it across an entire organization. This is particularly useful if you need to quickly establish a common baseline for resource configuration policies and best practices across multiple accounts in your organization in a scalable and efficient way.",
    }
]

export const caseStudies = [
    {
        header: "Web3/NFT/Blockchain",
        sub_header: "Glonur uses AWS Config to ensure adherence to complaince standards.",
        paragraph: "Glonur is a global nursing recruitment portal. In the times of COVID-19, it is of utmost importance for healthcare professionals to be connected and available to serve the public. Having the right resources at the right time at the right place is the motto of Glonur, and having their systems on AWS ensures that the infrastructure is available 24/7 and is scalable to cater to the demand. At Glonur, AWS config is used for ensuring compliance to data protection standards. Required resources and configuration are defined and AWS Config monitors resource configuration changes against the rules and flags them as non-compliant if they are not followed. Some of the use cases are to make sure data is encrypted at rest and any encryption standards uses a minimum of TLS version 1.2. Another use case id to ensure that IAM users with only with least granted privileges can access the workload resources and flags if any permissions are modified or created.",
    },
    {
        header: "Healthcare Job Portal",
        sub_header: "Systems Manager – keeping systems secure and giving operational insights",
        paragraph: "Glonur is a global nursing recruitment portal. In the times of COVID-19, it is of utmost importance for healthcare professionals to be connected and available to serve the public. Having the right resources at the right time at the right place is the motto of Glonur, and having their systems on AWS ensures that the infrastructure is available 24/7 and is scalable to cater to the demand. AWS Systems Manager is used to patch, maintain and gain operational insights into the Glonur infrastructure on AWS.",
    }
]