import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace user. */
export namespace user {
  /** Namespace auth. */
  namespace auth {
    /** Properties of a RegisterUserRequest. */
    interface IRegisterUserRequest {
      /** RegisterUserRequest user */
      user?: common.IUser | null;
    }

    /** Represents a RegisterUserRequest. */
    class RegisterUserRequest implements IRegisterUserRequest {
      /**
       * Constructs a new RegisterUserRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: user.auth.IRegisterUserRequest);

      /** RegisterUserRequest user. */
      public user?: common.IUser | null;

      /**
       * Creates a new RegisterUserRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RegisterUserRequest instance
       */
      public static create(
        properties?: user.auth.IRegisterUserRequest
      ): user.auth.RegisterUserRequest;

      /**
       * Encodes the specified RegisterUserRequest message. Does not implicitly {@link user.auth.RegisterUserRequest.verify|verify} messages.
       * @param message RegisterUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: user.auth.IRegisterUserRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified RegisterUserRequest message, length delimited. Does not implicitly {@link user.auth.RegisterUserRequest.verify|verify} messages.
       * @param message RegisterUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: user.auth.IRegisterUserRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a RegisterUserRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RegisterUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): user.auth.RegisterUserRequest;

      /**
       * Decodes a RegisterUserRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RegisterUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): user.auth.RegisterUserRequest;

      /**
       * Verifies a RegisterUserRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RegisterUserRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RegisterUserRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): user.auth.RegisterUserRequest;

      /**
       * Creates a plain object from a RegisterUserRequest message. Also converts values to other types if specified.
       * @param message RegisterUserRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: user.auth.RegisterUserRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this RegisterUserRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RegisterUserRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RegisterUserResponse. */
    interface IRegisterUserResponse {
      /** RegisterUserResponse message */
      message?: string | null;

      /** RegisterUserResponse verificationCode */
      verificationCode?: string | null;

      /** RegisterUserResponse success */
      success?: boolean | null;
    }

    /** Represents a RegisterUserResponse. */
    class RegisterUserResponse implements IRegisterUserResponse {
      /**
       * Constructs a new RegisterUserResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: user.auth.IRegisterUserResponse);

      /** RegisterUserResponse message. */
      public message: string;

      /** RegisterUserResponse verificationCode. */
      public verificationCode: string;

      /** RegisterUserResponse success. */
      public success: boolean;

      /**
       * Creates a new RegisterUserResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns RegisterUserResponse instance
       */
      public static create(
        properties?: user.auth.IRegisterUserResponse
      ): user.auth.RegisterUserResponse;

      /**
       * Encodes the specified RegisterUserResponse message. Does not implicitly {@link user.auth.RegisterUserResponse.verify|verify} messages.
       * @param message RegisterUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: user.auth.IRegisterUserResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified RegisterUserResponse message, length delimited. Does not implicitly {@link user.auth.RegisterUserResponse.verify|verify} messages.
       * @param message RegisterUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: user.auth.IRegisterUserResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a RegisterUserResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns RegisterUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): user.auth.RegisterUserResponse;

      /**
       * Decodes a RegisterUserResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns RegisterUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): user.auth.RegisterUserResponse;

      /**
       * Verifies a RegisterUserResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a RegisterUserResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns RegisterUserResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): user.auth.RegisterUserResponse;

      /**
       * Creates a plain object from a RegisterUserResponse message. Also converts values to other types if specified.
       * @param message RegisterUserResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: user.auth.RegisterUserResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this RegisterUserResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for RegisterUserResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginUserRequest. */
    interface ILoginUserRequest {
      /** LoginUserRequest email */
      email?: string | null;

      /** LoginUserRequest password */
      password?: string | null;
    }

    /** Represents a LoginUserRequest. */
    class LoginUserRequest implements ILoginUserRequest {
      /**
       * Constructs a new LoginUserRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: user.auth.ILoginUserRequest);

      /** LoginUserRequest email. */
      public email: string;

      /** LoginUserRequest password. */
      public password: string;

      /**
       * Creates a new LoginUserRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LoginUserRequest instance
       */
      public static create(
        properties?: user.auth.ILoginUserRequest
      ): user.auth.LoginUserRequest;

      /**
       * Encodes the specified LoginUserRequest message. Does not implicitly {@link user.auth.LoginUserRequest.verify|verify} messages.
       * @param message LoginUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: user.auth.ILoginUserRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified LoginUserRequest message, length delimited. Does not implicitly {@link user.auth.LoginUserRequest.verify|verify} messages.
       * @param message LoginUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: user.auth.ILoginUserRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a LoginUserRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns LoginUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): user.auth.LoginUserRequest;

      /**
       * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns LoginUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): user.auth.LoginUserRequest;

      /**
       * Verifies a LoginUserRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a LoginUserRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns LoginUserRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): user.auth.LoginUserRequest;

      /**
       * Creates a plain object from a LoginUserRequest message. Also converts values to other types if specified.
       * @param message LoginUserRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: user.auth.LoginUserRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this LoginUserRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for LoginUserRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginUserResponse. */
    interface ILoginUserResponse {
      /** LoginUserResponse user */
      user?: common.IUser | null;

      /** LoginUserResponse message */
      message?: string | null;

      /** LoginUserResponse success */
      success?: boolean | null;
    }

    /** Represents a LoginUserResponse. */
    class LoginUserResponse implements ILoginUserResponse {
      /**
       * Constructs a new LoginUserResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: user.auth.ILoginUserResponse);

      /** LoginUserResponse user. */
      public user?: common.IUser | null;

      /** LoginUserResponse message. */
      public message: string;

      /** LoginUserResponse success. */
      public success: boolean;

      /**
       * Creates a new LoginUserResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns LoginUserResponse instance
       */
      public static create(
        properties?: user.auth.ILoginUserResponse
      ): user.auth.LoginUserResponse;

      /**
       * Encodes the specified LoginUserResponse message. Does not implicitly {@link user.auth.LoginUserResponse.verify|verify} messages.
       * @param message LoginUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: user.auth.ILoginUserResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified LoginUserResponse message, length delimited. Does not implicitly {@link user.auth.LoginUserResponse.verify|verify} messages.
       * @param message LoginUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: user.auth.ILoginUserResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a LoginUserResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns LoginUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): user.auth.LoginUserResponse;

      /**
       * Decodes a LoginUserResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns LoginUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): user.auth.LoginUserResponse;

      /**
       * Verifies a LoginUserResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a LoginUserResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns LoginUserResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): user.auth.LoginUserResponse;

      /**
       * Creates a plain object from a LoginUserResponse message. Also converts values to other types if specified.
       * @param message LoginUserResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: user.auth.LoginUserResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this LoginUserResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for LoginUserResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyUserRequest. */
    interface IVerifyUserRequest {
      /** VerifyUserRequest verificationCode */
      verificationCode?: string | null;
    }

    /** Represents a VerifyUserRequest. */
    class VerifyUserRequest implements IVerifyUserRequest {
      /**
       * Constructs a new VerifyUserRequest.
       * @param [properties] Properties to set
       */
      constructor(properties?: user.auth.IVerifyUserRequest);

      /** VerifyUserRequest verificationCode. */
      public verificationCode: string;

      /**
       * Creates a new VerifyUserRequest instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VerifyUserRequest instance
       */
      public static create(
        properties?: user.auth.IVerifyUserRequest
      ): user.auth.VerifyUserRequest;

      /**
       * Encodes the specified VerifyUserRequest message. Does not implicitly {@link user.auth.VerifyUserRequest.verify|verify} messages.
       * @param message VerifyUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: user.auth.IVerifyUserRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified VerifyUserRequest message, length delimited. Does not implicitly {@link user.auth.VerifyUserRequest.verify|verify} messages.
       * @param message VerifyUserRequest message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: user.auth.IVerifyUserRequest,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a VerifyUserRequest message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns VerifyUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): user.auth.VerifyUserRequest;

      /**
       * Decodes a VerifyUserRequest message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns VerifyUserRequest
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): user.auth.VerifyUserRequest;

      /**
       * Verifies a VerifyUserRequest message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a VerifyUserRequest message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns VerifyUserRequest
       */
      public static fromObject(object: {
        [k: string]: any;
      }): user.auth.VerifyUserRequest;

      /**
       * Creates a plain object from a VerifyUserRequest message. Also converts values to other types if specified.
       * @param message VerifyUserRequest
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: user.auth.VerifyUserRequest,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this VerifyUserRequest to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for VerifyUserRequest
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a VerifyUserResponse. */
    interface IVerifyUserResponse {
      /** VerifyUserResponse message */
      message?: string | null;

      /** VerifyUserResponse success */
      success?: string | null;

      /** VerifyUserResponse isVerified */
      isVerified?: boolean | null;
    }

    /** Represents a VerifyUserResponse. */
    class VerifyUserResponse implements IVerifyUserResponse {
      /**
       * Constructs a new VerifyUserResponse.
       * @param [properties] Properties to set
       */
      constructor(properties?: user.auth.IVerifyUserResponse);

      /** VerifyUserResponse message. */
      public message: string;

      /** VerifyUserResponse success. */
      public success: string;

      /** VerifyUserResponse isVerified. */
      public isVerified: boolean;

      /**
       * Creates a new VerifyUserResponse instance using the specified properties.
       * @param [properties] Properties to set
       * @returns VerifyUserResponse instance
       */
      public static create(
        properties?: user.auth.IVerifyUserResponse
      ): user.auth.VerifyUserResponse;

      /**
       * Encodes the specified VerifyUserResponse message. Does not implicitly {@link user.auth.VerifyUserResponse.verify|verify} messages.
       * @param message VerifyUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: user.auth.IVerifyUserResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified VerifyUserResponse message, length delimited. Does not implicitly {@link user.auth.VerifyUserResponse.verify|verify} messages.
       * @param message VerifyUserResponse message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: user.auth.IVerifyUserResponse,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a VerifyUserResponse message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns VerifyUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): user.auth.VerifyUserResponse;

      /**
       * Decodes a VerifyUserResponse message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns VerifyUserResponse
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): user.auth.VerifyUserResponse;

      /**
       * Verifies a VerifyUserResponse message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a VerifyUserResponse message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns VerifyUserResponse
       */
      public static fromObject(object: {
        [k: string]: any;
      }): user.auth.VerifyUserResponse;

      /**
       * Creates a plain object from a VerifyUserResponse message. Also converts values to other types if specified.
       * @param message VerifyUserResponse
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: user.auth.VerifyUserResponse,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this VerifyUserResponse to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for VerifyUserResponse
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Represents a UserAuthService */
    class UserAuthService extends $protobuf.rpc.Service {
      /**
       * Constructs a new UserAuthService service.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       */
      constructor(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      );

      /**
       * Creates new UserAuthService service using the specified rpc implementation.
       * @param rpcImpl RPC implementation
       * @param [requestDelimited=false] Whether requests are length-delimited
       * @param [responseDelimited=false] Whether responses are length-delimited
       * @returns RPC service. Useful where requests and/or responses are streamed.
       */
      public static create(
        rpcImpl: $protobuf.RPCImpl,
        requestDelimited?: boolean,
        responseDelimited?: boolean
      ): UserAuthService;

      /**
       * Calls RegisterUser.
       * @param request RegisterUserRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and RegisterUserResponse
       */
      public registerUser(
        request: user.auth.IRegisterUserRequest,
        callback: user.auth.UserAuthService.RegisterUserCallback
      ): void;

      /**
       * Calls RegisterUser.
       * @param request RegisterUserRequest message or plain object
       * @returns Promise
       */
      public registerUser(
        request: user.auth.IRegisterUserRequest
      ): Promise<user.auth.RegisterUserResponse>;

      /**
       * Calls VerifyUser.
       * @param request VerifyUserRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and VerifyUserResponse
       */
      public verifyUser(
        request: user.auth.IVerifyUserRequest,
        callback: user.auth.UserAuthService.VerifyUserCallback
      ): void;

      /**
       * Calls VerifyUser.
       * @param request VerifyUserRequest message or plain object
       * @returns Promise
       */
      public verifyUser(
        request: user.auth.IVerifyUserRequest
      ): Promise<user.auth.VerifyUserResponse>;

      /**
       * Calls LoginUser.
       * @param request LoginUserRequest message or plain object
       * @param callback Node-style callback called with the error, if any, and LoginUserResponse
       */
      public loginUser(
        request: user.auth.ILoginUserRequest,
        callback: user.auth.UserAuthService.LoginUserCallback
      ): void;

      /**
       * Calls LoginUser.
       * @param request LoginUserRequest message or plain object
       * @returns Promise
       */
      public loginUser(
        request: user.auth.ILoginUserRequest
      ): Promise<user.auth.LoginUserResponse>;
    }

    namespace UserAuthService {
      /**
       * Callback as used by {@link user.auth.UserAuthService#registerUser}.
       * @param error Error, if any
       * @param [response] RegisterUserResponse
       */
      type RegisterUserCallback = (
        error: Error | null,
        response?: user.auth.RegisterUserResponse
      ) => void;

      /**
       * Callback as used by {@link user.auth.UserAuthService#verifyUser}.
       * @param error Error, if any
       * @param [response] VerifyUserResponse
       */
      type VerifyUserCallback = (
        error: Error | null,
        response?: user.auth.VerifyUserResponse
      ) => void;

      /**
       * Callback as used by {@link user.auth.UserAuthService#loginUser}.
       * @param error Error, if any
       * @param [response] LoginUserResponse
       */
      type LoginUserCallback = (
        error: Error | null,
        response?: user.auth.LoginUserResponse
      ) => void;
    }
  }
}

/** Namespace common. */
export namespace common {
  /** Gender enum. */
  enum Gender {
    MALE = 0,
    FEMALE = 1,
    OTHERS = 2,
  }

  /** Status enum. */
  enum Status {
    PENDING = 0,
    INPROGRESS = 1,
    RESOLVED = 2,
  }

  /** Priority enum. */
  enum Priority {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
  }

  /** FileType enum. */
  enum FileType {
    IMAGE = 0,
    VIDEO = 1,
  }

  /** InfraType enum. */
  enum InfraType {
    ROAD = 0,
    BRIDGE = 1,
    PARK = 2,
    SCHOOL = 3,
    OTHER = 4,
  }

  /** Properties of a User. */
  interface IUser {
    /** User id */
    id?: string | null;

    /** User firstName */
    firstName?: string | null;

    /** User midName */
    midName?: string | null;

    /** User lastName */
    lastName?: string | null;

    /** User gender */
    gender?: common.Gender | null | "MALE" | "FEMALE" | "OTHERS";

    /** User age */
    age?: number | null;

    /** User contact */
    contact?: string | null;

    /** User email */
    email?: string | null;

    /** User password */
    password?: string | null;

    /** User profileImage */
    profileImage?: string | null;

    /** User isAdmin */
    isAdmin?: boolean | null;

    /** User isVerified */
    isVerified?: boolean | null;

    /** User verificationCode */
    verificationCode?: string | null;

    /** User citizenShipFront */
    citizenShipFront?: string | null;

    /** User citizenShipBack */
    citizenShipBack?: string | null;
  }

  /** Represents a User. */
  class User implements IUser {
    /**
     * Constructs a new User.
     * @param [properties] Properties to set
     */
    constructor(properties?: common.IUser);

    /** User id. */
    public id: string;

    /** User firstName. */
    public firstName: string;

    /** User midName. */
    public midName: string;

    /** User lastName. */
    public lastName: string;

    /** User gender. */
    public gender: common.Gender;

    /** User age. */
    public age: number;

    /** User contact. */
    public contact: string;

    /** User email. */
    public email: string;

    /** User password. */
    public password: string;

    /** User profileImage. */
    public profileImage: string;

    /** User isAdmin. */
    public isAdmin: boolean;

    /** User isVerified. */
    public isVerified: boolean;

    /** User verificationCode. */
    public verificationCode: string;

    /** User citizenShipFront. */
    public citizenShipFront: string;

    /** User citizenShipBack. */
    public citizenShipBack: string;

    /**
     * Creates a new User instance using the specified properties.
     * @param [properties] Properties to set
     * @returns User instance
     */
    public static create(properties?: common.IUser): common.User;

    /**
     * Encodes the specified User message. Does not implicitly {@link common.User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: common.IUser,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified User message, length delimited. Does not implicitly {@link common.User.verify|verify} messages.
     * @param message User message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: common.IUser,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a User message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): common.User;

    /**
     * Decodes a User message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns User
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): common.User;

    /**
     * Verifies a User message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a User message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns User
     */
    public static fromObject(object: { [k: string]: any }): common.User;

    /**
     * Creates a plain object from a User message. Also converts values to other types if specified.
     * @param message User
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: common.User,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this User to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for User
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an Infrastructure. */
  interface IInfrastructure {
    /** Infrastructure id */
    id?: string | null;

    /** Infrastructure name */
    name?: string | null;

    /** Infrastructure type */
    type?: common.InfraType | null;

    /** Infrastructure details */
    details?: string | null;

    /** Infrastructure createdAt */
    createdAt?: string | null;

    /** Infrastructure updatedAt */
    updatedAt?: string | null;
  }

  /** Represents an Infrastructure. */
  class Infrastructure implements IInfrastructure {
    /**
     * Constructs a new Infrastructure.
     * @param [properties] Properties to set
     */
    constructor(properties?: common.IInfrastructure);

    /** Infrastructure id. */
    public id: string;

    /** Infrastructure name. */
    public name: string;

    /** Infrastructure type. */
    public type: common.InfraType;

    /** Infrastructure details. */
    public details: string;

    /** Infrastructure createdAt. */
    public createdAt: string;

    /** Infrastructure updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new Infrastructure instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Infrastructure instance
     */
    public static create(
      properties?: common.IInfrastructure
    ): common.Infrastructure;

    /**
     * Encodes the specified Infrastructure message. Does not implicitly {@link common.Infrastructure.verify|verify} messages.
     * @param message Infrastructure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: common.IInfrastructure,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Infrastructure message, length delimited. Does not implicitly {@link common.Infrastructure.verify|verify} messages.
     * @param message Infrastructure message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: common.IInfrastructure,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an Infrastructure message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Infrastructure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): common.Infrastructure;

    /**
     * Decodes an Infrastructure message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Infrastructure
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): common.Infrastructure;

    /**
     * Verifies an Infrastructure message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an Infrastructure message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Infrastructure
     */
    public static fromObject(object: {
      [k: string]: any;
    }): common.Infrastructure;

    /**
     * Creates a plain object from an Infrastructure message. Also converts values to other types if specified.
     * @param message Infrastructure
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: common.Infrastructure,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Infrastructure to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Infrastructure
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Report. */
  interface IReport {
    /** Report id */
    id?: string | null;

    /** Report title */
    title?: string | null;

    /** Report description */
    description?: string | null;

    /** Report status */
    status?: common.Status | null;

    /** Report priority */
    priority?: common.Priority | null;

    /** Report userId */
    userId?: string | null;

    /** Report user */
    user?: common.IUser | null;

    /** Report infrastructureId */
    infrastructureId?: string | null;

    /** Report infrastructure */
    infrastructure?: common.IInfrastructure | null;

    /** Report locationId */
    locationId?: string | null;

    /** Report location */
    location?: common.ILocation | null;

    /** Report comments */
    comments?: common.IComment[] | null;

    /** Report media */
    media?: common.IMedia[] | null;

    /** Report createdAt */
    createdAt?: string | null;

    /** Report updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a Report. */
  class Report implements IReport {
    /**
     * Constructs a new Report.
     * @param [properties] Properties to set
     */
    constructor(properties?: common.IReport);

    /** Report id. */
    public id: string;

    /** Report title. */
    public title: string;

    /** Report description. */
    public description: string;

    /** Report status. */
    public status: common.Status;

    /** Report priority. */
    public priority: common.Priority;

    /** Report userId. */
    public userId: string;

    /** Report user. */
    public user?: common.IUser | null;

    /** Report infrastructureId. */
    public infrastructureId: string;

    /** Report infrastructure. */
    public infrastructure?: common.IInfrastructure | null;

    /** Report locationId. */
    public locationId: string;

    /** Report location. */
    public location?: common.ILocation | null;

    /** Report comments. */
    public comments: common.IComment[];

    /** Report media. */
    public media: common.IMedia[];

    /** Report createdAt. */
    public createdAt: string;

    /** Report updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new Report instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Report instance
     */
    public static create(properties?: common.IReport): common.Report;

    /**
     * Encodes the specified Report message. Does not implicitly {@link common.Report.verify|verify} messages.
     * @param message Report message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: common.IReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Report message, length delimited. Does not implicitly {@link common.Report.verify|verify} messages.
     * @param message Report message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: common.IReport,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Report message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Report
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): common.Report;

    /**
     * Decodes a Report message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Report
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): common.Report;

    /**
     * Verifies a Report message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Report message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Report
     */
    public static fromObject(object: { [k: string]: any }): common.Report;

    /**
     * Creates a plain object from a Report message. Also converts values to other types if specified.
     * @param message Report
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: common.Report,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Report to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Report
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Location. */
  interface ILocation {
    /** Location id */
    id?: string | null;

    /** Location latitude */
    latitude?: number | null;

    /** Location longitude */
    longitude?: number | null;

    /** Location address */
    address?: string | null;

    /** Location reports */
    reports?: common.IReport[] | null;

    /** Location createdAt */
    createdAt?: string | null;

    /** Location updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a Location. */
  class Location implements ILocation {
    /**
     * Constructs a new Location.
     * @param [properties] Properties to set
     */
    constructor(properties?: common.ILocation);

    /** Location id. */
    public id: string;

    /** Location latitude. */
    public latitude: number;

    /** Location longitude. */
    public longitude: number;

    /** Location address. */
    public address: string;

    /** Location reports. */
    public reports: common.IReport[];

    /** Location createdAt. */
    public createdAt: string;

    /** Location updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new Location instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Location instance
     */
    public static create(properties?: common.ILocation): common.Location;

    /**
     * Encodes the specified Location message. Does not implicitly {@link common.Location.verify|verify} messages.
     * @param message Location message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: common.ILocation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Location message, length delimited. Does not implicitly {@link common.Location.verify|verify} messages.
     * @param message Location message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: common.ILocation,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Location message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Location
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): common.Location;

    /**
     * Decodes a Location message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Location
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): common.Location;

    /**
     * Verifies a Location message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Location message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Location
     */
    public static fromObject(object: { [k: string]: any }): common.Location;

    /**
     * Creates a plain object from a Location message. Also converts values to other types if specified.
     * @param message Location
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: common.Location,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Location to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Location
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Comment. */
  interface IComment {
    /** Comment id */
    id?: string | null;

    /** Comment content */
    content?: string | null;

    /** Comment reportId */
    reportId?: string | null;

    /** Comment report */
    report?: common.IReport | null;

    /** Comment userId */
    userId?: string | null;

    /** Comment user */
    user?: common.IUser | null;

    /** Comment createdAt */
    createdAt?: string | null;

    /** Comment updatedAt */
    updatedAt?: string | null;
  }

  /** Represents a Comment. */
  class Comment implements IComment {
    /**
     * Constructs a new Comment.
     * @param [properties] Properties to set
     */
    constructor(properties?: common.IComment);

    /** Comment id. */
    public id: string;

    /** Comment content. */
    public content: string;

    /** Comment reportId. */
    public reportId: string;

    /** Comment report. */
    public report?: common.IReport | null;

    /** Comment userId. */
    public userId: string;

    /** Comment user. */
    public user?: common.IUser | null;

    /** Comment createdAt. */
    public createdAt: string;

    /** Comment updatedAt. */
    public updatedAt: string;

    /**
     * Creates a new Comment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Comment instance
     */
    public static create(properties?: common.IComment): common.Comment;

    /**
     * Encodes the specified Comment message. Does not implicitly {@link common.Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: common.IComment,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Comment message, length delimited. Does not implicitly {@link common.Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: common.IComment,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Comment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): common.Comment;

    /**
     * Decodes a Comment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): common.Comment;

    /**
     * Verifies a Comment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Comment
     */
    public static fromObject(object: { [k: string]: any }): common.Comment;

    /**
     * Creates a plain object from a Comment message. Also converts values to other types if specified.
     * @param message Comment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: common.Comment,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Comment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Comment
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Media. */
  interface IMedia {
    /** Media id */
    id?: string | null;

    /** Media fileUrl */
    fileUrl?: string | null;

    /** Media fileType */
    fileType?: common.FileType | null;

    /** Media reportId */
    reportId?: string | null;

    /** Media report */
    report?: common.IReport | null;

    /** Media createdAt */
    createdAt?: string | null;
  }

  /** Represents a Media. */
  class Media implements IMedia {
    /**
     * Constructs a new Media.
     * @param [properties] Properties to set
     */
    constructor(properties?: common.IMedia);

    /** Media id. */
    public id: string;

    /** Media fileUrl. */
    public fileUrl: string;

    /** Media fileType. */
    public fileType: common.FileType;

    /** Media reportId. */
    public reportId: string;

    /** Media report. */
    public report?: common.IReport | null;

    /** Media createdAt. */
    public createdAt: string;

    /**
     * Creates a new Media instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Media instance
     */
    public static create(properties?: common.IMedia): common.Media;

    /**
     * Encodes the specified Media message. Does not implicitly {@link common.Media.verify|verify} messages.
     * @param message Media message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: common.IMedia,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Media message, length delimited. Does not implicitly {@link common.Media.verify|verify} messages.
     * @param message Media message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: common.IMedia,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Media message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Media
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): common.Media;

    /**
     * Decodes a Media message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Media
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): common.Media;

    /**
     * Verifies a Media message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Media message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Media
     */
    public static fromObject(object: { [k: string]: any }): common.Media;

    /**
     * Creates a plain object from a Media message. Also converts values to other types if specified.
     * @param message Media
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: common.Media,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Media to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Media
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }
}
