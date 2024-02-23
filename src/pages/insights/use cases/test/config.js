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
        header: "RCA",
        sub_header: "RCA has been a software provider for Chartered Accountants for over 20 years in France",
        paragraph: "The organization initiated the use of AWS Control Tower at the outset of its migration project to establish a multi-account environment, enhance security measures, and leverage pre-configured best practices. The primary goal was to implement a robust account strategy, governance structure, and efficient management of security rules from the project's inception. AWS Control Tower facilitated the creation of the initial organizational framework, designed for easy adaptation in the future. The platform also facilitated the configuration of AWS IAM Identity Center (the successor to AWS Single Sign-On) and the centralization of access logs in a dedicated account. The adoption of AWS Control Tower brought default security elements into the project that might have been overlooked initially. The organization observed a notable 50% improvement in productivity related to control deployments and a 20% enhancement in account creation and landing operations. These gains underscored the effectiveness of AWS Control Tower in streamlining operations and bolstering security measures during the migration project.",
    },
    {
        header: "Arondor",
        sub_header: "Arondor, a company created by specialists in document management, offers a range of services and solutions to meet all needs in the field.",
        paragraph: "They began utilizing AWS Control Tower in May 2022. AWS Control Tower empowers them to swiftly establish new accounts for their customers and facilitate their management. As a European company, the emphasis on data residency as a crucial feature of the service was important to them. AWS Control Tower permits them to deploy and update security rules via controls, ensuring the provision of a highly secure environment for their customers in alignment with their ISO-27001 certification.",
    }
]