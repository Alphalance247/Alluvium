"use client";
import Layout from "components/layout";
import List from "components/privacy_policy/List";
const ITCyberSecurityPolicy = () => {
  const policyContent = [
    {
      head: "1. OBJECTIVE",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `This IT security policy establishes guidelines and procedures for safeguarding Alluvium’s (also
referred to as “The Organization'') information assets and IT infrastructure from unauthorized
access, misuse, and security threats. Data, electronic file content, information systems, and
computer systems at Alluvium must be managed as valuable organization resources.`,
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "2. SCOPE",
      paragraph: [
        {
          type: "paragraphandLink",
          text: " This policy applies to the use of information, electronic and computing devices, and network resources to conduct business or interact with internal networks and business systems, whether owned or leased by The Organization, the employee, or a third party.",
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: "All employees, volunteer, directors, contractors, consultants, temporaries, other workers at the Organization and all third parties who have access or make use of the organization’s information system are responsible for exercising good judgment regarding appropriate use of information, electronic devices, and network resources in accordance with this policy, local laws, and regulations",
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "3. OWNERSHIP OF ELECTRONIC FILES",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "All electronic files created, sent, received, or stored on the organization owned, leased, or administered equipment or otherwise under the custody and control of the organization are the property of the organization",
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "4. PRIVACY",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `All electronic files created, sent, received, or stored on the organization owned, leased, or
administered equipment or otherwise under the custody and control of the organization are not
private and may be accessed by the organization's IT employees at any time without knowledge
of the user, sender, recipient, or owner subject to the approval of management.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `Electronic file content may also be accessed by appropriate personnel in accordance with directives from Human Resources or the management.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "5. GENERAL USE AND OWNERSHIP",
      paragraph: [
        {
          type: "list",
          list: `Access requests must be authorized and submitted from departmental supervisors for
employees to gain access to computer systems and the Organization’s networks like
Confluence,Slack,Jira,etc and the IT Department reserves the right to lockdown, monitor,
audit networks and systems on a periodic basis to ensure compliance with this policy.`,
          isBold: false,
        },

        {
          type: "list",
          list: `The IT Department reserves the right to remove any non-business related software or
files from any system. Examples of non-business related software or files include, but are not limited to; games, instant messengers, pop email, music files, image files, freeware,
and shareware.`,
          isBold: false,
        },

        {
          type: "list",
          list: `Authorized users are accountable for all activity that takes place under their username.`,
          isBold: false,
        },
        {
          type: "list",
          list: `All our Engineers are security checked formally by the police and informally via local
and trusted recommendations.`,
          isBold: false,
        },
        {
          type: "list",
          list: `All employees are GDPR qualified and re-qualified yearly.`,
          isBold: false,
        },
        {
          type: "list",
          list: `All Client Work is done using a remote desktop service(VDI) called AWS Workspaces
provided by Amazon Web Services. This allows us to benefit from AWS infrastructure
and security. We also enjoy extended software support for the Operating systems used for
the Workspaces. Our interactions with the workspaces are secure by the following
practices:`,
          isBold: false,
        },

        {
          type: "paragraphandLink",
          text: `- Use SSL/TLS to communicate with AWS resources.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `- Set up API and user activity logging with AWS CloudTrail.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: ` - Use AWS encryption solutions, along with all default security controls within AWS services.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `and copying of files or clipboards in or out of the VDIs is not allowed.`,
          isLinkAvailable: false,
        },

        {
          type: "list",
          list: `These VDIs are accessed via The Organization’s issued Laptops which are controlled by
the Organization as stated above.`,
          isBold: false,
        },
        {
          type: "list",
          list: `The Organization operates mostly with Atlassian tools, therefore, the Organization
benefits from the strict Attlassian protection system.`,
          isBold: false,
        },
        {
          type: "list",
          list: `Codes like Aliases are used to refer to clients and their projects which only the needed
staff on that project knows what they stand for.`,
          isBold: false,
        },
        {
          type: "list",
          list: `All our staff across countries use a UK mobile number which are linked to a central
monitored account`,
          isBold: false,
        },
      ],
    },

    {
      head: "6. SECURITY AND PROPRIETARY INFORMATION",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `All mobile and computing devices issued by the Company are connected to the internal network
and must comply with this policy.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `System level and user level passwords must comply with the Password Policy. Authorized users
must not share their Alluvium login ID(s), account(s), passwords, Personal Identification
Numbers (PIN), Security Tokens (i.e. Smartcard), or similar information or devices used for
identification and authentication purposes. Mobile phones for 2FA are also issued by the
Organization which is controlled as needed.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `SyProviding access to another individual, either deliberately or through failure to secure its access,
is prohibited.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `Authorized users may access, use, or share the Organization’s proprietary information only to the
extent it is authorized and necessary to fulfill the users assigned job duties.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `All PCs, laptops, and workstations should be secured with a password-protected screensaver with
the automatic activation feature set at 10 minutes or less.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `All users must lockdown their PCs, laptops, and workstations by locking when the host will be
unattended for any amount of time. Employees must log-off, or restart their PC after their shift.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `All users are responsible for promptly reporting the theft, loss, or unauthorized disclosure of
Alluvium’s PCs, laptops, other equipment and proprietary information to their immediate
supervisor and/or the IT Department.`,
          isLinkAvailable: false,
        },
        {
          type: "italic",
          italicText: `All users must report damage to the Product team and All users must note that the Company is
not liable to repair all damages. The Organization will exercise their discretion to decide what
kind of damages the Organization will be responsible for and which damages the Users will be
responsible for.`,
        },
        {
          type: "paragraphandLink",
          text: `Authorized users must use extreme caution when opening e-mail attachments received from
unknown senders, which may contain viruses, e-mail bombs, or Trojan Horse codes.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "7. UNACCEPTABLE USE ",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `Users must not intentionally access, create, store, or transmit material which The Organization
may deem to be offensive, indecent, or obscene.`,
          isLinkAvailable: false,
        },

        {
          type: "paragraphandLink",
          text: `Under no circumstances is an employee, volunteer, director, contractor, consultant, or temporary
employee of The Organization authorized to engage in any activity that is illegal under local,
state, federal, or international law while utilizing The Organization’s owned resources.`,
          isLinkAvailable: false,
        },

        {
          type: "list",
          isBold: true,
          boldText: "System and Network Activities",
        },

        {
          type: "paragraphandLink",
          text: `Under no circumstances is an employee, volunteer, director, contractor, consultant, or temporary
employee of The Organization authorized to engage in any activity that is illegal under local,
state, federal, or international law while utilizing The Organization’s owned resources.`,
          isLinkAvailable: false,
        },

        {
          type: "list",
          list: `Violations of the rights of any person or company protected by copyright, trade secret,
patent, or other intellectual property, or similar laws or regulations, including, but not
limited to, the installation or distribution of “pirated” or other software products that are
not appropriately licensed for use by The Organization.`,
          isBold: false,
        },

        {
          type: "list",
          isBold: false,
          list: `Unauthorized copying of copyrighted material including, but not limited to, digitization
and distribution from copyrighted sources, copyrighted music, and the installation of any
copyrighted software for which The Organization or the end user does not have an active
license is prohibited. Users must report unlicensed copies of installed software to IT.`,
        },

        {
          type: "list",
          isBold: false,
          list: `Introduction of malicious programs into the network or server (e.g., viruses, worms,
Trojan horses, e-mail bombs, etc.).`,
        },

        {
          type: "list",
          isBold: false,
          list: `Revealing your account password to others or allowing use of your account by others.
This includes family and other household members when work is being done at home.`,
        },

        {
          type: "list",
          isBold: false,
          list: `Using The Organization computing asset to actively engage in procuring or transmitting
material that is in violation of sexual harassment or hostile workplace laws.`,
        },
        {
          type: "list",
          isBold: false,
          list: `Attempting to access any data, electronic content, or programs contained on The
Organization systems for which they do not have authorization, explicit consent, or
implicit need for their job duties.`,
        },
        {
          type: "list",
          isBold: false,
          list: `Installing any software, upgrades, updates, or patches on any computer or information
system without the prior consent of The Organization’s IT.`,
        },
        {
          type: "list",
          isBold: false,
          list: `Installing or using non-standard shareware or freeware software without The
Organization’s IT approval.`,
        },
        {
          type: "list",
          isBold: false,
          list: `Installing, disconnecting, or moving any Alluvium’s owned computer equipment and
peripheral devices without prior consent of The Organization’s IT Department.`,
        },

        {
          type: "list",
          isBold: false,
          list: `Purchasing software or hardware, for The Organization’s use, without prior IT
compatibility review.`,
        },
        {
          type: "list",
          isBold: false,
          list: `Purposely engaging in activity that may:`,
        },
        {
          type: "sublist",
          list: `degrade the performance of information systems;`,
          isBold: false,
        },
        {
          type: "sublist",
          list: `deprive an authorized Alluvium user access to one of The Organization’s resource;`,
          isBold: false,
        },
        {
          type: "sublist",
          list: `obtain extra resources beyond those allocated; or`,
          isLinkAvailable: false,
        },
        {
          type: "sublist",
          list: `circumvent The Organization’s computer security measures.`,
          isLinkAvailable: false,
        },
        {
          type: "list",
          list: `Downloading, installing, or running security programs or utilities that reveal passwords,
private information, or exploit weaknesses in the security of a system. For example,
Alluvium users must not run spyware, adware, password cracking programs, packet
sniffers, port scanners, or any other non- approved programs on The Organization’s
information systems. The Organization’s IT Department is the only department
authorized to perform these actions.`,
          isLinkAvailable: false,
        },
        {
          type: "list",
          list: `Circumventing user authentication or security of any host, network, or account.`,
          isLinkAvailable: false,
        },
        {
          type: "list",
          list: `Interfering with, or denying service to, any user other than the employee’s host (for
example, denial of service attack).`,
          isLinkAvailable: false,
        },
        {
          type: "list",
          list: `Using any program/script/command, or sending messages of any kind, with the intent to
interfere with or disable a user’s terminal session, by any means, locally or via the
Internet/Intranet/Extranet.`,
          isLinkAvailable: false,
        },

        {
          type: "italic",
          italicText: `Access to the Internet at home, from an Alluvium owned computer, must adhere to all the
same policies that apply to use from within The Organization facilities. Authorized users must
not allow family members or other non-authorized users to access The Organization’s
computer systems.`,
        },

        {
          type: "paragraphandLink",
          text: `The Organization’s information systems must not be used for personal benefit.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "8. VULNERABILITY ASSESSMENT AND ANTI-VIRUS SOFTWARE",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "The IT Department shall carry out regular vulnerability assessment and utilize patch management, threat protection and scheduled monitoring to identify, assess, mitigate and protect against threats, viruses and malicious code.",
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: "The IT Department shall ensure that the Organization uses up to date reputable anti virus checking software tools to check the Systems and to scan all email attachments before they are opened and shall implement network security controls, intrusion detection systems to limit the scope of any attack.",
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "9. REVIEW AND ACCEPTANCE",
      paragraph: [
        {
          type: "paragraphandLink",
          text: "This Policy shall be reviewed annually and be approved by the management to ensure its effectiveness and relevance to the Organization’s security objectives.",
          isLinkAvailable: false,
        },
      ],
    },
    {
      head: "10. POLICY EXCEPTIONS",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `The IT department will Evaluate exception requests based on business justifications and risk
assessments.`,
          isLinkAvailable: false,
        },
        {
          type: "paragraphandLink",
          text: `The IT department will Obtain approval from appropriate management and IT security
stakeholders for policy exceptions.`,
          isLinkAvailable: false,
        },
      ],
    },

    {
      head: "11. NON COMPLIANCE",
      paragraph: [
        {
          type: "paragraphandLink",
          text: `Non- Compliance with this policy may result in disciplinary action up to the termination of
employment or legal action, depending on the severity of the violation and its impact on the
Organization’s security posture.`,
          isLinkAvailable: false,
        },
      ],
    },
  ];
  return (
    <Layout>
      <List heading={"IT AND CYBER SECURITY POLICY"} content={policyContent} />
    </Layout>
  );
};

export default ITCyberSecurityPolicy;
