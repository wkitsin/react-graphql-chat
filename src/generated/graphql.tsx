import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ISO8601DateTime: any;
  File: any;
};

export type Avatar = {
  id: Scalars['ID'];
  image: Image;
  name: Scalars['String'];
};

export type Chatroom = {
  counselor: Counselor;
  id: Scalars['ID'];
  messages: Maybe<Array<Message>>;
  updatedAt: Scalars['ISO8601DateTime'];
  user: User;
};

export type Company = {
  id: Scalars['ID'];
  image: Maybe<Image>;
  name: Scalars['String'];
};

export type Counselor = {
  avatar: Maybe<Image>;
  chatroom: Maybe<Chatroom>;
  chatrooms: Maybe<Array<Chatroom>>;
  deviceIds: Array<Scalars['String']>;
  email: Scalars['String'];
  gender: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  optionalLanguage: Maybe<Scalars['String']>;
  organization: Organization;
  pendingRequests: Maybe<Array<Request>>;
  phoneNumber: Maybe<Scalars['String']>;
  primaryLanguage: Maybe<Scalars['String']>;
  secondaryLanguage: Maybe<Scalars['String']>;
  termsAndConditionsAccepted: Scalars['Boolean'];
  username: Maybe<Scalars['String']>;
};


export type CounselorChatroomArgs = {
  id: Scalars['ID'];
};

export type CreateChatroomInput = {
  requestId: Scalars['ID'];
};

export type CreateChatroomPayload = {
  chatroom: Maybe<Chatroom>;
  errors: Maybe<Array<Error>>;
};

export type CreateMessageInput = {
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['File']>;
  chatroomId: Scalars['ID'];
};

export type CreateMessagePayload = {
  errors: Maybe<Array<Error>>;
  message: Maybe<Message>;
};

export type Error = {
  detail: Scalars['String'];
  path: Maybe<Scalars['String']>;
};

export type Favourable = Speaker | Post | MeditationProgram;


export type Image = {
  blobId: Scalars['ID'];
  height: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  url: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};

export type Interest = {
  chatrooms: Maybe<Array<Chatroom>>;
  id: Scalars['ID'];
  image: Image;
  name: Scalars['String'];
  organizations: Maybe<Array<Organization>>;
  posts: Maybe<Array<Post>>;
  speakers: Maybe<Array<Speaker>>;
};


export type MeditationGuide = {
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  programs: Maybe<Array<MeditationProgram>>;
  title: Scalars['String'];
};

export type MeditationProgram = {
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Maybe<Image>;
  meditationGuide: MeditationGuide;
  soundtrack: Maybe<Sound>;
  speaker: Maybe<Speaker>;
  title: Scalars['String'];
  users: Array<User>;
};

export type Medium = {
  id: Scalars['ID'];
  name: Scalars['String'];
  organization: Maybe<Organization>;
  pdf: Pdf;
  title: Scalars['String'];
};

export type Messagable = User | Counselor;

export type Message = {
  chatroom: Chatroom;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  image: Maybe<Image>;
  messagable: Messagable;
  text: Maybe<Scalars['String']>;
};

export type Mutation = {
  createChatroom: Maybe<CreateChatroomPayload>;
  createCounselorMessage: Maybe<CreateMessagePayload>;
  rejectRequest: Maybe<RejectRequestPayload>;
  sendCounselorConfirmation: Maybe<SendCounselorConfirmationPayload>;
  sendSignInEmail: Maybe<SendCounselorSignInEmailPayload>;
  signInCounselor: Maybe<SignInCounselorPayload>;
  signOutCounselor: Maybe<SignOutCounselorPayload>;
  verifyCounselor: Maybe<VerifyCounselorPayload>;
};


export type MutationCreateChatroomArgs = {
  input: CreateChatroomInput;
};


export type MutationCreateCounselorMessageArgs = {
  input: CreateMessageInput;
};


export type MutationRejectRequestArgs = {
  input: RejectRequestInput;
};


export type MutationSendCounselorConfirmationArgs = {
  input: SendCounselorConfirmationInput;
};


export type MutationSendSignInEmailArgs = {
  input: SendCounselorSignInEmailInput;
};


export type MutationSignInCounselorArgs = {
  input: SignInCounselorInput;
};


export type MutationVerifyCounselorArgs = {
  input: VerifyCounselorInput;
};

export type Organization = {
  banner: Maybe<Image>;
  description: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interest: Maybe<Interest>;
  location: Maybe<Scalars['String']>;
  logo: Maybe<Image>;
  media: Maybe<Array<Medium>>;
  missionAndVision: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber: Maybe<Scalars['String']>;
  programs: Maybe<Array<Program>>;
  reviews: Maybe<Array<Review>>;
};

export type Pdf = {
  blobId: Scalars['ID'];
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Post = {
  content: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image: Maybe<Image>;
  interest: Maybe<Interest>;
  soundtrack: Maybe<Sound>;
  speaker: Speaker;
  title: Scalars['String'];
  users: Array<User>;
  youtubeLink: Maybe<Scalars['String']>;
};

export type Program = {
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organization: Maybe<Organization>;
  title: Scalars['String'];
};

export type Query = {
  me: Maybe<Counselor>;
};

export type RejectRequestInput = {
  requestId: Scalars['ID'];
};

export type RejectRequestPayload = {
  errors: Maybe<Array<Error>>;
  request: Maybe<Request>;
};

export type Request = {
  counselor: Counselor;
  id: Scalars['ID'];
  interest: Interest;
  status: Scalars['String'];
  user: User;
};

export type Review = {
  chatroom: Chatroom;
  comment: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rating: Scalars['Int'];
  user: User;
};

export type SendCounselorConfirmationInput = {
  email: Scalars['String'];
};

export type SendCounselorConfirmationPayload = {
  counselor: Maybe<Counselor>;
  errors: Maybe<Array<Error>>;
};

export type SendCounselorSignInEmailInput = {
  email: Scalars['String'];
};

export type SendCounselorSignInEmailPayload = {
  counselor: Maybe<Counselor>;
  errors: Maybe<Array<Error>>;
};

export type SignInCounselorInput = {
  signInToken: Scalars['String'];
  deviceId: Scalars['String'];
};

export type SignInCounselorPayload = {
  counselor: Maybe<Counselor>;
  errors: Maybe<Array<Error>>;
  jwt: Maybe<Scalars['String']>;
};

export type SignOutCounselorPayload = {
  counselor: Maybe<Counselor>;
  errors: Maybe<Array<Error>>;
};

export type Sound = {
  blobId: Scalars['ID'];
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Speaker = {
  id: Scalars['ID'];
  image: Maybe<Image>;
  interest: Maybe<Interest>;
  name: Scalars['String'];
  posts: Maybe<Array<Post>>;
  users: Array<User>;
};

export type Subscription = {
  chatAccepted: Maybe<Chatroom>;
  chatRequest: Maybe<Request>;
  counselorMessageAdded: Maybe<Message>;
  unresponsiveRequest: Maybe<Request>;
};

export type User = {
  avatar: Maybe<Avatar>;
  chatroom: Maybe<Chatroom>;
  chatrooms: Maybe<Array<Chatroom>>;
  company: Company;
  deviceIds: Array<Scalars['String']>;
  email: Scalars['String'];
  favouriteMeditationPrograms: Maybe<Array<MeditationProgram>>;
  favouritePosts: Maybe<Array<Post>>;
  favouriteSpeakers: Maybe<Array<Speaker>>;
  favourites: Maybe<Array<UserFavourite>>;
  gender: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  interest: Maybe<Array<Interest>>;
  interests: Maybe<Array<Interest>>;
  phoneNumber: Maybe<Scalars['String']>;
  preferredLanguage: Maybe<Scalars['String']>;
  termsAndConditionsAccepted: Scalars['Boolean'];
  userNotificationSettings: Maybe<Array<UserNotificationSetting>>;
  username: Maybe<Scalars['String']>;
};


export type UserChatroomArgs = {
  id: Scalars['ID'];
};


export type UserInterestArgs = {
  ids: Array<Scalars['ID']>;
};

export type UserFavourite = {
  favourable: Favourable;
  id: Scalars['ID'];
  user: User;
};

export type UserNotificationSetting = {
  active: Scalars['Boolean'];
  id: Scalars['ID'];
  kind: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type VerifyCounselorInput = {
  signInToken: Scalars['String'];
  organizationId: Scalars['ID'];
  deviceId: Scalars['ID'];
};

export type VerifyCounselorPayload = {
  counselor: Maybe<Counselor>;
  errors: Maybe<Array<Error>>;
  jwt: Maybe<Scalars['String']>;
};

export type AvatarFragment = (
  Pick<Avatar, 'id' | 'name'>
  & { image: ImageFragment }
);

export type ChatroomFragment = (
  Pick<Chatroom, 'id'>
  & { messages: Maybe<Array<MessageFragment>> }
);

export type CompanyFragment = (
  Pick<Company, 'id' | 'name'>
  & { image: Maybe<ImageFragment> }
);

export type CounselorFragment = (
  Pick<Counselor, 'id' | 'deviceIds' | 'email' | 'gender' | 'optionalLanguage' | 'phoneNumber' | 'primaryLanguage' | 'secondaryLanguage' | 'termsAndConditionsAccepted' | 'username'>
  & { pendingRequests: Maybe<Array<RequestFragment>>, chatrooms: Maybe<Array<ChatroomFragment>> }
);

export type ErrorFragment = Pick<Error, 'path' | 'detail'>;

export type ImageFragment = Pick<Image, 'id' | 'url' | 'blobId'>;

export type InterestFragment = Pick<Interest, 'id' | 'name'>;

export type MeditationGuideFragment = (
  Pick<MeditationGuide, 'description' | 'id' | 'title'>
  & { image: Maybe<ImageFragment>, programs: Maybe<Array<MeditationProgramFragment>> }
);

export type MeditationProgramFragment = (
  Pick<MeditationProgram, 'id' | 'title' | 'description'>
  & { image: Maybe<ImageFragment>, soundtrack: Maybe<SoundFragment> }
);

export type MediumFragment = (
  Pick<Medium, 'id' | 'name' | 'title'>
  & { pdf: PdfFragment }
);

export type MessageFragment = (
  Pick<Message, 'createdAt' | 'id' | 'text'>
  & { messagable: (
    { __typename: 'User' }
    & Pick<User, 'id' | 'username'>
    & { avatar: Maybe<{ image: Pick<Image, 'url'> }> }
  ) | (
    { __typename: 'Counselor' }
    & Pick<Counselor, 'id' | 'username'>
    & { avatar: Maybe<Pick<Image, 'url'>> }
  ) }
);

export type OrganizationFragment = (
  Pick<Organization, 'id' | 'name' | 'email' | 'description' | 'location' | 'missionAndVision' | 'phoneNumber'>
  & { logo: Maybe<ImageFragment>, media: Maybe<Array<MediumFragment>>, banner: Maybe<ImageFragment> }
);

export type PdfFragment = Pick<Pdf, 'blobId' | 'id' | 'url'>;

export type PostFragment = (
  Pick<Post, 'id' | 'content' | 'title'>
  & { image: Maybe<ImageFragment> }
);

export type ProgramFragment = Pick<Program, 'id' | 'title' | 'description'>;

export type RequestFragment = (
  Pick<Request, 'id' | 'status'>
  & { user: UserFragment, interest: InterestFragment }
);

export type ReviewFragment = Pick<Review, 'id' | 'comment' | 'rating'>;

export type SoundFragment = Pick<Sound, 'id' | 'url' | 'blobId'>;

export type SpeakerFragment = (
  Pick<Speaker, 'id' | 'name'>
  & { image: Maybe<ImageFragment> }
);

export type UserFragment = (
  Pick<User, 'id' | 'email' | 'gender' | 'username' | 'phoneNumber' | 'deviceIds' | 'preferredLanguage' | 'termsAndConditionsAccepted'>
  & { avatar: Maybe<AvatarFragment>, chatrooms: Maybe<Array<ChatroomFragment>> }
);

export type UserNotificationSettingFragment = Pick<UserNotificationSetting, 'id' | 'name' | 'active' | 'kind'>;

export type CreateChatroomMutationMutationVariables = {
  requestId: Scalars['ID'];
};


export type CreateChatroomMutationMutation = { createChatroom: Maybe<{ chatroom: Maybe<ChatroomFragment>, errors: Maybe<Array<ErrorFragment>> }> };

export type CreateCounselorMessageMutationMutationVariables = {
  text: Scalars['String'];
  chatroomId: Scalars['ID'];
};


export type CreateCounselorMessageMutationMutation = { createCounselorMessage: Maybe<{ message: Maybe<MessageFragment>, errors: Maybe<Array<ErrorFragment>> }> };

export type RejectRequestMutationMutationVariables = {
  requestId: Scalars['ID'];
};


export type RejectRequestMutationMutation = { rejectRequest: Maybe<{ request: Maybe<RequestFragment>, errors: Maybe<Array<ErrorFragment>> }> };

export type MeQueryVariables = {};


export type MeQuery = { me: Maybe<CounselorFragment> };

export type CounselorMessageAddedSubscriptionVariables = {};


export type CounselorMessageAddedSubscription = { counselorMessageAdded: Maybe<MessageFragment> };

export type ChatRequestSubscriptionVariables = {};


export type ChatRequestSubscription = { chatRequest: Maybe<RequestFragment> };

export type UnresponsiveRequestSubscriptionVariables = {};


export type UnresponsiveRequestSubscription = { unresponsiveRequest: Maybe<RequestFragment> };

export const ImageFragmentDoc = gql`
    fragment Image on Image {
  id
  url
  blobId
}
    `;
export const CompanyFragmentDoc = gql`
    fragment Company on Company {
  id
  name
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const AvatarFragmentDoc = gql`
    fragment Avatar on Avatar {
  id
  image {
    ...Image
  }
  name
}
    ${ImageFragmentDoc}`;
export const MessageFragmentDoc = gql`
    fragment Message on Message {
  createdAt
  id
  text
  messagable {
    __typename
    ... on Counselor {
      id
      username
      avatar {
        url
      }
    }
    ... on User {
      id
      username
      avatar {
        image {
          url
        }
      }
    }
  }
}
    `;
export const ChatroomFragmentDoc = gql`
    fragment Chatroom on Chatroom {
  id
  messages {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  gender
  username
  phoneNumber
  deviceIds
  preferredLanguage
  termsAndConditionsAccepted
  avatar {
    ...Avatar
  }
  chatrooms {
    ...Chatroom
  }
}
    ${AvatarFragmentDoc}
${ChatroomFragmentDoc}`;
export const InterestFragmentDoc = gql`
    fragment Interest on Interest {
  id
  name
}
    `;
export const RequestFragmentDoc = gql`
    fragment Request on Request {
  id
  status
  user {
    ...User
  }
  interest {
    ...Interest
  }
}
    ${UserFragmentDoc}
${InterestFragmentDoc}`;
export const CounselorFragmentDoc = gql`
    fragment Counselor on Counselor {
  id
  deviceIds
  email
  gender
  optionalLanguage
  phoneNumber
  primaryLanguage
  secondaryLanguage
  termsAndConditionsAccepted
  username
  pendingRequests {
    ...Request
  }
  chatrooms {
    ...Chatroom
  }
}
    ${RequestFragmentDoc}
${ChatroomFragmentDoc}`;
export const ErrorFragmentDoc = gql`
    fragment Error on Error {
  path
  detail
}
    `;
export const SoundFragmentDoc = gql`
    fragment Sound on Sound {
  id
  url
  blobId
}
    `;
export const MeditationProgramFragmentDoc = gql`
    fragment MeditationProgram on MeditationProgram {
  id
  title
  description
  image {
    ...Image
  }
  soundtrack {
    ...Sound
  }
}
    ${ImageFragmentDoc}
${SoundFragmentDoc}`;
export const MeditationGuideFragmentDoc = gql`
    fragment MeditationGuide on MeditationGuide {
  description
  id
  title
  image {
    ...Image
  }
  programs {
    ...MeditationProgram
  }
}
    ${ImageFragmentDoc}
${MeditationProgramFragmentDoc}`;
export const PdfFragmentDoc = gql`
    fragment PDF on PDF {
  blobId
  id
  url
}
    `;
export const MediumFragmentDoc = gql`
    fragment Medium on Medium {
  id
  name
  title
  pdf {
    ...PDF
  }
}
    ${PdfFragmentDoc}`;
export const OrganizationFragmentDoc = gql`
    fragment Organization on Organization {
  id
  name
  email
  description
  location
  missionAndVision
  phoneNumber
  logo {
    ...Image
  }
  media {
    ...Medium
  }
  banner {
    ...Image
  }
}
    ${ImageFragmentDoc}
${MediumFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  id
  content
  title
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const ProgramFragmentDoc = gql`
    fragment Program on Program {
  id
  title
  description
}
    `;
export const ReviewFragmentDoc = gql`
    fragment Review on Review {
  id
  comment
  rating
}
    `;
export const SpeakerFragmentDoc = gql`
    fragment Speaker on Speaker {
  id
  name
  image {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const UserNotificationSettingFragmentDoc = gql`
    fragment UserNotificationSetting on UserNotificationSetting {
  id
  name
  active
  kind
}
    `;
export const CreateChatroomMutationDocument = gql`
    mutation CreateChatroomMutation($requestId: ID!) {
  createChatroom(input: {requestId: $requestId}) {
    chatroom {
      ...Chatroom
    }
    errors {
      ...Error
    }
  }
}
    ${ChatroomFragmentDoc}
${ErrorFragmentDoc}`;

/**
 * __useCreateChatroomMutationMutation__
 *
 * To run a mutation, you first call `useCreateChatroomMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatroomMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatroomMutationMutation, { data, loading, error }] = useCreateChatroomMutationMutation({
 *   variables: {
 *      requestId: // value for 'requestId'
 *   },
 * });
 */
export function useCreateChatroomMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateChatroomMutationMutation, CreateChatroomMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateChatroomMutationMutation, CreateChatroomMutationMutationVariables>(CreateChatroomMutationDocument, baseOptions);
      }
export type CreateChatroomMutationMutationHookResult = ReturnType<typeof useCreateChatroomMutationMutation>;
export type CreateChatroomMutationMutationResult = ApolloReactCommon.MutationResult<CreateChatroomMutationMutation>;
export type CreateChatroomMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateChatroomMutationMutation, CreateChatroomMutationMutationVariables>;
export const CreateCounselorMessageMutationDocument = gql`
    mutation CreateCounselorMessageMutation($text: String!, $chatroomId: ID!) {
  createCounselorMessage(input: {text: $text, chatroomId: $chatroomId}) {
    message {
      ...Message
    }
    errors {
      ...Error
    }
  }
}
    ${MessageFragmentDoc}
${ErrorFragmentDoc}`;

/**
 * __useCreateCounselorMessageMutationMutation__
 *
 * To run a mutation, you first call `useCreateCounselorMessageMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCounselorMessageMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCounselorMessageMutationMutation, { data, loading, error }] = useCreateCounselorMessageMutationMutation({
 *   variables: {
 *      text: // value for 'text'
 *      chatroomId: // value for 'chatroomId'
 *   },
 * });
 */
export function useCreateCounselorMessageMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCounselorMessageMutationMutation, CreateCounselorMessageMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCounselorMessageMutationMutation, CreateCounselorMessageMutationMutationVariables>(CreateCounselorMessageMutationDocument, baseOptions);
      }
export type CreateCounselorMessageMutationMutationHookResult = ReturnType<typeof useCreateCounselorMessageMutationMutation>;
export type CreateCounselorMessageMutationMutationResult = ApolloReactCommon.MutationResult<CreateCounselorMessageMutationMutation>;
export type CreateCounselorMessageMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCounselorMessageMutationMutation, CreateCounselorMessageMutationMutationVariables>;
export const RejectRequestMutationDocument = gql`
    mutation RejectRequestMutation($requestId: ID!) {
  rejectRequest(input: {requestId: $requestId}) {
    request {
      ...Request
    }
    errors {
      ...Error
    }
  }
}
    ${RequestFragmentDoc}
${ErrorFragmentDoc}`;

/**
 * __useRejectRequestMutationMutation__
 *
 * To run a mutation, you first call `useRejectRequestMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectRequestMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectRequestMutationMutation, { data, loading, error }] = useRejectRequestMutationMutation({
 *   variables: {
 *      requestId: // value for 'requestId'
 *   },
 * });
 */
export function useRejectRequestMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RejectRequestMutationMutation, RejectRequestMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<RejectRequestMutationMutation, RejectRequestMutationMutationVariables>(RejectRequestMutationDocument, baseOptions);
      }
export type RejectRequestMutationMutationHookResult = ReturnType<typeof useRejectRequestMutationMutation>;
export type RejectRequestMutationMutationResult = ApolloReactCommon.MutationResult<RejectRequestMutationMutation>;
export type RejectRequestMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<RejectRequestMutationMutation, RejectRequestMutationMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...Counselor
  }
}
    ${CounselorFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const CounselorMessageAddedDocument = gql`
    subscription CounselorMessageAdded {
  counselorMessageAdded {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useCounselorMessageAddedSubscription__
 *
 * To run a query within a React component, call `useCounselorMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCounselorMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCounselorMessageAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useCounselorMessageAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<CounselorMessageAddedSubscription, CounselorMessageAddedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<CounselorMessageAddedSubscription, CounselorMessageAddedSubscriptionVariables>(CounselorMessageAddedDocument, baseOptions);
      }
export type CounselorMessageAddedSubscriptionHookResult = ReturnType<typeof useCounselorMessageAddedSubscription>;
export type CounselorMessageAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<CounselorMessageAddedSubscription>;
export const ChatRequestDocument = gql`
    subscription ChatRequest {
  chatRequest {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useChatRequestSubscription__
 *
 * To run a query within a React component, call `useChatRequestSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatRequestSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRequestSubscription({
 *   variables: {
 *   },
 * });
 */
export function useChatRequestSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChatRequestSubscription, ChatRequestSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ChatRequestSubscription, ChatRequestSubscriptionVariables>(ChatRequestDocument, baseOptions);
      }
export type ChatRequestSubscriptionHookResult = ReturnType<typeof useChatRequestSubscription>;
export type ChatRequestSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatRequestSubscription>;
export const UnresponsiveRequestDocument = gql`
    subscription UnresponsiveRequest {
  unresponsiveRequest {
    ...Request
  }
}
    ${RequestFragmentDoc}`;

/**
 * __useUnresponsiveRequestSubscription__
 *
 * To run a query within a React component, call `useUnresponsiveRequestSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUnresponsiveRequestSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnresponsiveRequestSubscription({
 *   variables: {
 *   },
 * });
 */
export function useUnresponsiveRequestSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<UnresponsiveRequestSubscription, UnresponsiveRequestSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<UnresponsiveRequestSubscription, UnresponsiveRequestSubscriptionVariables>(UnresponsiveRequestDocument, baseOptions);
      }
export type UnresponsiveRequestSubscriptionHookResult = ReturnType<typeof useUnresponsiveRequestSubscription>;
export type UnresponsiveRequestSubscriptionResult = ApolloReactCommon.SubscriptionResult<UnresponsiveRequestSubscription>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "Messagable",
        "possibleTypes": [
          {
            "name": "User"
          },
          {
            "name": "Counselor"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "Favourable",
        "possibleTypes": [
          {
            "name": "Speaker"
          },
          {
            "name": "Post"
          },
          {
            "name": "MeditationProgram"
          }
        ]
      }
    ]
  }
};
      export default result;
    