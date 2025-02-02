/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.auth = (function() {

        /**
         * Namespace auth.
         * @memberof user
         * @namespace
         */
        var auth = {};

        auth.RegisterUserRequest = (function() {

            /**
             * Properties of a RegisterUserRequest.
             * @memberof user.auth
             * @interface IRegisterUserRequest
             * @property {common.IUser|null} [user] RegisterUserRequest user
             */

            /**
             * Constructs a new RegisterUserRequest.
             * @memberof user.auth
             * @classdesc Represents a RegisterUserRequest.
             * @implements IRegisterUserRequest
             * @constructor
             * @param {user.auth.IRegisterUserRequest=} [properties] Properties to set
             */
            function RegisterUserRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RegisterUserRequest user.
             * @member {common.IUser|null|undefined} user
             * @memberof user.auth.RegisterUserRequest
             * @instance
             */
            RegisterUserRequest.prototype.user = null;

            /**
             * Creates a new RegisterUserRequest instance using the specified properties.
             * @function create
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {user.auth.IRegisterUserRequest=} [properties] Properties to set
             * @returns {user.auth.RegisterUserRequest} RegisterUserRequest instance
             */
            RegisterUserRequest.create = function create(properties) {
                return new RegisterUserRequest(properties);
            };

            /**
             * Encodes the specified RegisterUserRequest message. Does not implicitly {@link user.auth.RegisterUserRequest.verify|verify} messages.
             * @function encode
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {user.auth.IRegisterUserRequest} message RegisterUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterUserRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.common.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified RegisterUserRequest message, length delimited. Does not implicitly {@link user.auth.RegisterUserRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {user.auth.IRegisterUserRequest} message RegisterUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RegisterUserRequest message from the specified reader or buffer.
             * @function decode
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.auth.RegisterUserRequest} RegisterUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterUserRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.auth.RegisterUserRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.user = $root.common.User.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RegisterUserRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {user.auth.RegisterUserRequest} RegisterUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterUserRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RegisterUserRequest message.
             * @function verify
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterUserRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.common.User.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                return null;
            };

            /**
             * Creates a RegisterUserRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {user.auth.RegisterUserRequest} RegisterUserRequest
             */
            RegisterUserRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.user.auth.RegisterUserRequest)
                    return object;
                var message = new $root.user.auth.RegisterUserRequest();
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".user.auth.RegisterUserRequest.user: object expected");
                    message.user = $root.common.User.fromObject(object.user);
                }
                return message;
            };

            /**
             * Creates a plain object from a RegisterUserRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {user.auth.RegisterUserRequest} message RegisterUserRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterUserRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.user = null;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.common.User.toObject(message.user, options);
                return object;
            };

            /**
             * Converts this RegisterUserRequest to JSON.
             * @function toJSON
             * @memberof user.auth.RegisterUserRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterUserRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RegisterUserRequest
             * @function getTypeUrl
             * @memberof user.auth.RegisterUserRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RegisterUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/user.auth.RegisterUserRequest";
            };

            return RegisterUserRequest;
        })();

        auth.RegisterUserResponse = (function() {

            /**
             * Properties of a RegisterUserResponse.
             * @memberof user.auth
             * @interface IRegisterUserResponse
             * @property {string|null} [message] RegisterUserResponse message
             * @property {string|null} [verificationCode] RegisterUserResponse verificationCode
             * @property {boolean|null} [success] RegisterUserResponse success
             */

            /**
             * Constructs a new RegisterUserResponse.
             * @memberof user.auth
             * @classdesc Represents a RegisterUserResponse.
             * @implements IRegisterUserResponse
             * @constructor
             * @param {user.auth.IRegisterUserResponse=} [properties] Properties to set
             */
            function RegisterUserResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RegisterUserResponse message.
             * @member {string} message
             * @memberof user.auth.RegisterUserResponse
             * @instance
             */
            RegisterUserResponse.prototype.message = "";

            /**
             * RegisterUserResponse verificationCode.
             * @member {string} verificationCode
             * @memberof user.auth.RegisterUserResponse
             * @instance
             */
            RegisterUserResponse.prototype.verificationCode = "";

            /**
             * RegisterUserResponse success.
             * @member {boolean} success
             * @memberof user.auth.RegisterUserResponse
             * @instance
             */
            RegisterUserResponse.prototype.success = false;

            /**
             * Creates a new RegisterUserResponse instance using the specified properties.
             * @function create
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {user.auth.IRegisterUserResponse=} [properties] Properties to set
             * @returns {user.auth.RegisterUserResponse} RegisterUserResponse instance
             */
            RegisterUserResponse.create = function create(properties) {
                return new RegisterUserResponse(properties);
            };

            /**
             * Encodes the specified RegisterUserResponse message. Does not implicitly {@link user.auth.RegisterUserResponse.verify|verify} messages.
             * @function encode
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {user.auth.IRegisterUserResponse} message RegisterUserResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterUserResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.verificationCode != null && Object.hasOwnProperty.call(message, "verificationCode"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.verificationCode);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified RegisterUserResponse message, length delimited. Does not implicitly {@link user.auth.RegisterUserResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {user.auth.IRegisterUserResponse} message RegisterUserResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RegisterUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RegisterUserResponse message from the specified reader or buffer.
             * @function decode
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.auth.RegisterUserResponse} RegisterUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterUserResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.auth.RegisterUserResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    case 2: {
                            message.verificationCode = reader.string();
                            break;
                        }
                    case 3: {
                            message.success = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RegisterUserResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {user.auth.RegisterUserResponse} RegisterUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RegisterUserResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RegisterUserResponse message.
             * @function verify
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RegisterUserResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                    if (!$util.isString(message.verificationCode))
                        return "verificationCode: string expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a RegisterUserResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {user.auth.RegisterUserResponse} RegisterUserResponse
             */
            RegisterUserResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.user.auth.RegisterUserResponse)
                    return object;
                var message = new $root.user.auth.RegisterUserResponse();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.verificationCode != null)
                    message.verificationCode = String(object.verificationCode);
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a RegisterUserResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {user.auth.RegisterUserResponse} message RegisterUserResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RegisterUserResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.verificationCode = "";
                    object.success = false;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                    object.verificationCode = message.verificationCode;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this RegisterUserResponse to JSON.
             * @function toJSON
             * @memberof user.auth.RegisterUserResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RegisterUserResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RegisterUserResponse
             * @function getTypeUrl
             * @memberof user.auth.RegisterUserResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RegisterUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/user.auth.RegisterUserResponse";
            };

            return RegisterUserResponse;
        })();

        auth.LoginUserRequest = (function() {

            /**
             * Properties of a LoginUserRequest.
             * @memberof user.auth
             * @interface ILoginUserRequest
             * @property {string|null} [email] LoginUserRequest email
             * @property {string|null} [password] LoginUserRequest password
             */

            /**
             * Constructs a new LoginUserRequest.
             * @memberof user.auth
             * @classdesc Represents a LoginUserRequest.
             * @implements ILoginUserRequest
             * @constructor
             * @param {user.auth.ILoginUserRequest=} [properties] Properties to set
             */
            function LoginUserRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginUserRequest email.
             * @member {string} email
             * @memberof user.auth.LoginUserRequest
             * @instance
             */
            LoginUserRequest.prototype.email = "";

            /**
             * LoginUserRequest password.
             * @member {string} password
             * @memberof user.auth.LoginUserRequest
             * @instance
             */
            LoginUserRequest.prototype.password = "";

            /**
             * Creates a new LoginUserRequest instance using the specified properties.
             * @function create
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {user.auth.ILoginUserRequest=} [properties] Properties to set
             * @returns {user.auth.LoginUserRequest} LoginUserRequest instance
             */
            LoginUserRequest.create = function create(properties) {
                return new LoginUserRequest(properties);
            };

            /**
             * Encodes the specified LoginUserRequest message. Does not implicitly {@link user.auth.LoginUserRequest.verify|verify} messages.
             * @function encode
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {user.auth.ILoginUserRequest} message LoginUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginUserRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
                if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
                return writer;
            };

            /**
             * Encodes the specified LoginUserRequest message, length delimited. Does not implicitly {@link user.auth.LoginUserRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {user.auth.ILoginUserRequest} message LoginUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginUserRequest message from the specified reader or buffer.
             * @function decode
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.auth.LoginUserRequest} LoginUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginUserRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.auth.LoginUserRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.email = reader.string();
                            break;
                        }
                    case 2: {
                            message.password = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginUserRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {user.auth.LoginUserRequest} LoginUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginUserRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginUserRequest message.
             * @function verify
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginUserRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.email != null && message.hasOwnProperty("email"))
                    if (!$util.isString(message.email))
                        return "email: string expected";
                if (message.password != null && message.hasOwnProperty("password"))
                    if (!$util.isString(message.password))
                        return "password: string expected";
                return null;
            };

            /**
             * Creates a LoginUserRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {user.auth.LoginUserRequest} LoginUserRequest
             */
            LoginUserRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.user.auth.LoginUserRequest)
                    return object;
                var message = new $root.user.auth.LoginUserRequest();
                if (object.email != null)
                    message.email = String(object.email);
                if (object.password != null)
                    message.password = String(object.password);
                return message;
            };

            /**
             * Creates a plain object from a LoginUserRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {user.auth.LoginUserRequest} message LoginUserRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginUserRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.email = "";
                    object.password = "";
                }
                if (message.email != null && message.hasOwnProperty("email"))
                    object.email = message.email;
                if (message.password != null && message.hasOwnProperty("password"))
                    object.password = message.password;
                return object;
            };

            /**
             * Converts this LoginUserRequest to JSON.
             * @function toJSON
             * @memberof user.auth.LoginUserRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginUserRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LoginUserRequest
             * @function getTypeUrl
             * @memberof user.auth.LoginUserRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LoginUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/user.auth.LoginUserRequest";
            };

            return LoginUserRequest;
        })();

        auth.LoginUserResponse = (function() {

            /**
             * Properties of a LoginUserResponse.
             * @memberof user.auth
             * @interface ILoginUserResponse
             * @property {common.IUser|null} [user] LoginUserResponse user
             * @property {string|null} [message] LoginUserResponse message
             * @property {boolean|null} [success] LoginUserResponse success
             */

            /**
             * Constructs a new LoginUserResponse.
             * @memberof user.auth
             * @classdesc Represents a LoginUserResponse.
             * @implements ILoginUserResponse
             * @constructor
             * @param {user.auth.ILoginUserResponse=} [properties] Properties to set
             */
            function LoginUserResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LoginUserResponse user.
             * @member {common.IUser|null|undefined} user
             * @memberof user.auth.LoginUserResponse
             * @instance
             */
            LoginUserResponse.prototype.user = null;

            /**
             * LoginUserResponse message.
             * @member {string} message
             * @memberof user.auth.LoginUserResponse
             * @instance
             */
            LoginUserResponse.prototype.message = "";

            /**
             * LoginUserResponse success.
             * @member {boolean} success
             * @memberof user.auth.LoginUserResponse
             * @instance
             */
            LoginUserResponse.prototype.success = false;

            /**
             * Creates a new LoginUserResponse instance using the specified properties.
             * @function create
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {user.auth.ILoginUserResponse=} [properties] Properties to set
             * @returns {user.auth.LoginUserResponse} LoginUserResponse instance
             */
            LoginUserResponse.create = function create(properties) {
                return new LoginUserResponse(properties);
            };

            /**
             * Encodes the specified LoginUserResponse message. Does not implicitly {@link user.auth.LoginUserResponse.verify|verify} messages.
             * @function encode
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {user.auth.ILoginUserResponse} message LoginUserResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginUserResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.common.User.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.success);
                return writer;
            };

            /**
             * Encodes the specified LoginUserResponse message, length delimited. Does not implicitly {@link user.auth.LoginUserResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {user.auth.ILoginUserResponse} message LoginUserResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LoginUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LoginUserResponse message from the specified reader or buffer.
             * @function decode
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.auth.LoginUserResponse} LoginUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginUserResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.auth.LoginUserResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.user = $root.common.User.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.message = reader.string();
                            break;
                        }
                    case 3: {
                            message.success = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LoginUserResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {user.auth.LoginUserResponse} LoginUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LoginUserResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LoginUserResponse message.
             * @function verify
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LoginUserResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    var error = $root.common.User.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (typeof message.success !== "boolean")
                        return "success: boolean expected";
                return null;
            };

            /**
             * Creates a LoginUserResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {user.auth.LoginUserResponse} LoginUserResponse
             */
            LoginUserResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.user.auth.LoginUserResponse)
                    return object;
                var message = new $root.user.auth.LoginUserResponse();
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".user.auth.LoginUserResponse.user: object expected");
                    message.user = $root.common.User.fromObject(object.user);
                }
                if (object.message != null)
                    message.message = String(object.message);
                if (object.success != null)
                    message.success = Boolean(object.success);
                return message;
            };

            /**
             * Creates a plain object from a LoginUserResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {user.auth.LoginUserResponse} message LoginUserResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LoginUserResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.user = null;
                    object.message = "";
                    object.success = false;
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.common.User.toObject(message.user, options);
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                return object;
            };

            /**
             * Converts this LoginUserResponse to JSON.
             * @function toJSON
             * @memberof user.auth.LoginUserResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LoginUserResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LoginUserResponse
             * @function getTypeUrl
             * @memberof user.auth.LoginUserResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LoginUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/user.auth.LoginUserResponse";
            };

            return LoginUserResponse;
        })();

        auth.VerifyUserRequest = (function() {

            /**
             * Properties of a VerifyUserRequest.
             * @memberof user.auth
             * @interface IVerifyUserRequest
             * @property {string|null} [verificationCode] VerifyUserRequest verificationCode
             */

            /**
             * Constructs a new VerifyUserRequest.
             * @memberof user.auth
             * @classdesc Represents a VerifyUserRequest.
             * @implements IVerifyUserRequest
             * @constructor
             * @param {user.auth.IVerifyUserRequest=} [properties] Properties to set
             */
            function VerifyUserRequest(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VerifyUserRequest verificationCode.
             * @member {string} verificationCode
             * @memberof user.auth.VerifyUserRequest
             * @instance
             */
            VerifyUserRequest.prototype.verificationCode = "";

            /**
             * Creates a new VerifyUserRequest instance using the specified properties.
             * @function create
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {user.auth.IVerifyUserRequest=} [properties] Properties to set
             * @returns {user.auth.VerifyUserRequest} VerifyUserRequest instance
             */
            VerifyUserRequest.create = function create(properties) {
                return new VerifyUserRequest(properties);
            };

            /**
             * Encodes the specified VerifyUserRequest message. Does not implicitly {@link user.auth.VerifyUserRequest.verify|verify} messages.
             * @function encode
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {user.auth.IVerifyUserRequest} message VerifyUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VerifyUserRequest.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.verificationCode != null && Object.hasOwnProperty.call(message, "verificationCode"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.verificationCode);
                return writer;
            };

            /**
             * Encodes the specified VerifyUserRequest message, length delimited. Does not implicitly {@link user.auth.VerifyUserRequest.verify|verify} messages.
             * @function encodeDelimited
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {user.auth.IVerifyUserRequest} message VerifyUserRequest message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VerifyUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VerifyUserRequest message from the specified reader or buffer.
             * @function decode
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.auth.VerifyUserRequest} VerifyUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VerifyUserRequest.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.auth.VerifyUserRequest();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.verificationCode = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VerifyUserRequest message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {user.auth.VerifyUserRequest} VerifyUserRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VerifyUserRequest.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VerifyUserRequest message.
             * @function verify
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VerifyUserRequest.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                    if (!$util.isString(message.verificationCode))
                        return "verificationCode: string expected";
                return null;
            };

            /**
             * Creates a VerifyUserRequest message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {user.auth.VerifyUserRequest} VerifyUserRequest
             */
            VerifyUserRequest.fromObject = function fromObject(object) {
                if (object instanceof $root.user.auth.VerifyUserRequest)
                    return object;
                var message = new $root.user.auth.VerifyUserRequest();
                if (object.verificationCode != null)
                    message.verificationCode = String(object.verificationCode);
                return message;
            };

            /**
             * Creates a plain object from a VerifyUserRequest message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {user.auth.VerifyUserRequest} message VerifyUserRequest
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VerifyUserRequest.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.verificationCode = "";
                if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                    object.verificationCode = message.verificationCode;
                return object;
            };

            /**
             * Converts this VerifyUserRequest to JSON.
             * @function toJSON
             * @memberof user.auth.VerifyUserRequest
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VerifyUserRequest.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VerifyUserRequest
             * @function getTypeUrl
             * @memberof user.auth.VerifyUserRequest
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VerifyUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/user.auth.VerifyUserRequest";
            };

            return VerifyUserRequest;
        })();

        auth.VerifyUserResponse = (function() {

            /**
             * Properties of a VerifyUserResponse.
             * @memberof user.auth
             * @interface IVerifyUserResponse
             * @property {string|null} [message] VerifyUserResponse message
             * @property {string|null} [success] VerifyUserResponse success
             * @property {boolean|null} [isVerified] VerifyUserResponse isVerified
             */

            /**
             * Constructs a new VerifyUserResponse.
             * @memberof user.auth
             * @classdesc Represents a VerifyUserResponse.
             * @implements IVerifyUserResponse
             * @constructor
             * @param {user.auth.IVerifyUserResponse=} [properties] Properties to set
             */
            function VerifyUserResponse(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * VerifyUserResponse message.
             * @member {string} message
             * @memberof user.auth.VerifyUserResponse
             * @instance
             */
            VerifyUserResponse.prototype.message = "";

            /**
             * VerifyUserResponse success.
             * @member {string} success
             * @memberof user.auth.VerifyUserResponse
             * @instance
             */
            VerifyUserResponse.prototype.success = "";

            /**
             * VerifyUserResponse isVerified.
             * @member {boolean} isVerified
             * @memberof user.auth.VerifyUserResponse
             * @instance
             */
            VerifyUserResponse.prototype.isVerified = false;

            /**
             * Creates a new VerifyUserResponse instance using the specified properties.
             * @function create
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {user.auth.IVerifyUserResponse=} [properties] Properties to set
             * @returns {user.auth.VerifyUserResponse} VerifyUserResponse instance
             */
            VerifyUserResponse.create = function create(properties) {
                return new VerifyUserResponse(properties);
            };

            /**
             * Encodes the specified VerifyUserResponse message. Does not implicitly {@link user.auth.VerifyUserResponse.verify|verify} messages.
             * @function encode
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {user.auth.IVerifyUserResponse} message VerifyUserResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VerifyUserResponse.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.message);
                if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.success);
                if (message.isVerified != null && Object.hasOwnProperty.call(message, "isVerified"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isVerified);
                return writer;
            };

            /**
             * Encodes the specified VerifyUserResponse message, length delimited. Does not implicitly {@link user.auth.VerifyUserResponse.verify|verify} messages.
             * @function encodeDelimited
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {user.auth.IVerifyUserResponse} message VerifyUserResponse message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            VerifyUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a VerifyUserResponse message from the specified reader or buffer.
             * @function decode
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {user.auth.VerifyUserResponse} VerifyUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VerifyUserResponse.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.auth.VerifyUserResponse();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.message = reader.string();
                            break;
                        }
                    case 2: {
                            message.success = reader.string();
                            break;
                        }
                    case 3: {
                            message.isVerified = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a VerifyUserResponse message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {user.auth.VerifyUserResponse} VerifyUserResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            VerifyUserResponse.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a VerifyUserResponse message.
             * @function verify
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            VerifyUserResponse.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.message != null && message.hasOwnProperty("message"))
                    if (!$util.isString(message.message))
                        return "message: string expected";
                if (message.success != null && message.hasOwnProperty("success"))
                    if (!$util.isString(message.success))
                        return "success: string expected";
                if (message.isVerified != null && message.hasOwnProperty("isVerified"))
                    if (typeof message.isVerified !== "boolean")
                        return "isVerified: boolean expected";
                return null;
            };

            /**
             * Creates a VerifyUserResponse message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {user.auth.VerifyUserResponse} VerifyUserResponse
             */
            VerifyUserResponse.fromObject = function fromObject(object) {
                if (object instanceof $root.user.auth.VerifyUserResponse)
                    return object;
                var message = new $root.user.auth.VerifyUserResponse();
                if (object.message != null)
                    message.message = String(object.message);
                if (object.success != null)
                    message.success = String(object.success);
                if (object.isVerified != null)
                    message.isVerified = Boolean(object.isVerified);
                return message;
            };

            /**
             * Creates a plain object from a VerifyUserResponse message. Also converts values to other types if specified.
             * @function toObject
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {user.auth.VerifyUserResponse} message VerifyUserResponse
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            VerifyUserResponse.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.message = "";
                    object.success = "";
                    object.isVerified = false;
                }
                if (message.message != null && message.hasOwnProperty("message"))
                    object.message = message.message;
                if (message.success != null && message.hasOwnProperty("success"))
                    object.success = message.success;
                if (message.isVerified != null && message.hasOwnProperty("isVerified"))
                    object.isVerified = message.isVerified;
                return object;
            };

            /**
             * Converts this VerifyUserResponse to JSON.
             * @function toJSON
             * @memberof user.auth.VerifyUserResponse
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            VerifyUserResponse.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for VerifyUserResponse
             * @function getTypeUrl
             * @memberof user.auth.VerifyUserResponse
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            VerifyUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/user.auth.VerifyUserResponse";
            };

            return VerifyUserResponse;
        })();

        auth.UserAuthService = (function() {

            /**
             * Constructs a new UserAuthService service.
             * @memberof user.auth
             * @classdesc Represents a UserAuthService
             * @extends $protobuf.rpc.Service
             * @constructor
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             */
            function UserAuthService(rpcImpl, requestDelimited, responseDelimited) {
                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
            }

            (UserAuthService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserAuthService;

            /**
             * Creates new UserAuthService service using the specified rpc implementation.
             * @function create
             * @memberof user.auth.UserAuthService
             * @static
             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
             * @returns {UserAuthService} RPC service. Useful where requests and/or responses are streamed.
             */
            UserAuthService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                return new this(rpcImpl, requestDelimited, responseDelimited);
            };

            /**
             * Callback as used by {@link user.auth.UserAuthService#registerUser}.
             * @memberof user.auth.UserAuthService
             * @typedef RegisterUserCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {user.auth.RegisterUserResponse} [response] RegisterUserResponse
             */

            /**
             * Calls RegisterUser.
             * @function registerUser
             * @memberof user.auth.UserAuthService
             * @instance
             * @param {user.auth.IRegisterUserRequest} request RegisterUserRequest message or plain object
             * @param {user.auth.UserAuthService.RegisterUserCallback} callback Node-style callback called with the error, if any, and RegisterUserResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserAuthService.prototype.registerUser = function registerUser(request, callback) {
                return this.rpcCall(registerUser, $root.user.auth.RegisterUserRequest, $root.user.auth.RegisterUserResponse, request, callback);
            }, "name", { value: "RegisterUser" });

            /**
             * Calls RegisterUser.
             * @function registerUser
             * @memberof user.auth.UserAuthService
             * @instance
             * @param {user.auth.IRegisterUserRequest} request RegisterUserRequest message or plain object
             * @returns {Promise<user.auth.RegisterUserResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link user.auth.UserAuthService#verifyUser}.
             * @memberof user.auth.UserAuthService
             * @typedef VerifyUserCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {user.auth.VerifyUserResponse} [response] VerifyUserResponse
             */

            /**
             * Calls VerifyUser.
             * @function verifyUser
             * @memberof user.auth.UserAuthService
             * @instance
             * @param {user.auth.IVerifyUserRequest} request VerifyUserRequest message or plain object
             * @param {user.auth.UserAuthService.VerifyUserCallback} callback Node-style callback called with the error, if any, and VerifyUserResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserAuthService.prototype.verifyUser = function verifyUser(request, callback) {
                return this.rpcCall(verifyUser, $root.user.auth.VerifyUserRequest, $root.user.auth.VerifyUserResponse, request, callback);
            }, "name", { value: "VerifyUser" });

            /**
             * Calls VerifyUser.
             * @function verifyUser
             * @memberof user.auth.UserAuthService
             * @instance
             * @param {user.auth.IVerifyUserRequest} request VerifyUserRequest message or plain object
             * @returns {Promise<user.auth.VerifyUserResponse>} Promise
             * @variation 2
             */

            /**
             * Callback as used by {@link user.auth.UserAuthService#loginUser}.
             * @memberof user.auth.UserAuthService
             * @typedef LoginUserCallback
             * @type {function}
             * @param {Error|null} error Error, if any
             * @param {user.auth.LoginUserResponse} [response] LoginUserResponse
             */

            /**
             * Calls LoginUser.
             * @function loginUser
             * @memberof user.auth.UserAuthService
             * @instance
             * @param {user.auth.ILoginUserRequest} request LoginUserRequest message or plain object
             * @param {user.auth.UserAuthService.LoginUserCallback} callback Node-style callback called with the error, if any, and LoginUserResponse
             * @returns {undefined}
             * @variation 1
             */
            Object.defineProperty(UserAuthService.prototype.loginUser = function loginUser(request, callback) {
                return this.rpcCall(loginUser, $root.user.auth.LoginUserRequest, $root.user.auth.LoginUserResponse, request, callback);
            }, "name", { value: "LoginUser" });

            /**
             * Calls LoginUser.
             * @function loginUser
             * @memberof user.auth.UserAuthService
             * @instance
             * @param {user.auth.ILoginUserRequest} request LoginUserRequest message or plain object
             * @returns {Promise<user.auth.LoginUserResponse>} Promise
             * @variation 2
             */

            return UserAuthService;
        })();

        return auth;
    })();

    return user;
})();

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    /**
     * Gender enum.
     * @name common.Gender
     * @enum {number}
     * @property {number} MALE=0 MALE value
     * @property {number} FEMALE=1 FEMALE value
     * @property {number} OTHERS=2 OTHERS value
     */
    common.Gender = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MALE"] = 0;
        values[valuesById[1] = "FEMALE"] = 1;
        values[valuesById[2] = "OTHERS"] = 2;
        return values;
    })();

    /**
     * Status enum.
     * @name common.Status
     * @enum {number}
     * @property {number} PENDING=0 PENDING value
     * @property {number} INPROGRESS=1 INPROGRESS value
     * @property {number} RESOLVED=2 RESOLVED value
     */
    common.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PENDING"] = 0;
        values[valuesById[1] = "INPROGRESS"] = 1;
        values[valuesById[2] = "RESOLVED"] = 2;
        return values;
    })();

    /**
     * Priority enum.
     * @name common.Priority
     * @enum {number}
     * @property {number} LOW=0 LOW value
     * @property {number} MEDIUM=1 MEDIUM value
     * @property {number} HIGH=2 HIGH value
     */
    common.Priority = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LOW"] = 0;
        values[valuesById[1] = "MEDIUM"] = 1;
        values[valuesById[2] = "HIGH"] = 2;
        return values;
    })();

    /**
     * FileType enum.
     * @name common.FileType
     * @enum {number}
     * @property {number} IMAGE=0 IMAGE value
     * @property {number} VIDEO=1 VIDEO value
     */
    common.FileType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "IMAGE"] = 0;
        values[valuesById[1] = "VIDEO"] = 1;
        return values;
    })();

    /**
     * InfraType enum.
     * @name common.InfraType
     * @enum {number}
     * @property {number} ROAD=0 ROAD value
     * @property {number} BRIDGE=1 BRIDGE value
     * @property {number} PARK=2 PARK value
     * @property {number} SCHOOL=3 SCHOOL value
     * @property {number} OTHER=4 OTHER value
     */
    common.InfraType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROAD"] = 0;
        values[valuesById[1] = "BRIDGE"] = 1;
        values[valuesById[2] = "PARK"] = 2;
        values[valuesById[3] = "SCHOOL"] = 3;
        values[valuesById[4] = "OTHER"] = 4;
        return values;
    })();

    common.User = (function() {

        /**
         * Properties of a User.
         * @memberof common
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [firstName] User firstName
         * @property {string|null} [midName] User midName
         * @property {string|null} [lastName] User lastName
         * @property {common.Gender|null} [gender] User gender
         * @property {number|null} [age] User age
         * @property {string|null} [contact] User contact
         * @property {string|null} [email] User email
         * @property {string|null} [password] User password
         * @property {string|null} [profileImage] User profileImage
         * @property {boolean|null} [isAdmin] User isAdmin
         * @property {boolean|null} [isVerified] User isVerified
         * @property {string|null} [verificationCode] User verificationCode
         * @property {string|null} [citizenShipFront] User citizenShipFront
         * @property {string|null} [citizenShipBack] User citizenShipBack
         */

        /**
         * Constructs a new User.
         * @memberof common
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {common.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof common.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User firstName.
         * @member {string} firstName
         * @memberof common.User
         * @instance
         */
        User.prototype.firstName = "";

        /**
         * User midName.
         * @member {string} midName
         * @memberof common.User
         * @instance
         */
        User.prototype.midName = "";

        /**
         * User lastName.
         * @member {string} lastName
         * @memberof common.User
         * @instance
         */
        User.prototype.lastName = "";

        /**
         * User gender.
         * @member {common.Gender} gender
         * @memberof common.User
         * @instance
         */
        User.prototype.gender = 0;

        /**
         * User age.
         * @member {number} age
         * @memberof common.User
         * @instance
         */
        User.prototype.age = 0;

        /**
         * User contact.
         * @member {string} contact
         * @memberof common.User
         * @instance
         */
        User.prototype.contact = "";

        /**
         * User email.
         * @member {string} email
         * @memberof common.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * User password.
         * @member {string} password
         * @memberof common.User
         * @instance
         */
        User.prototype.password = "";

        /**
         * User profileImage.
         * @member {string} profileImage
         * @memberof common.User
         * @instance
         */
        User.prototype.profileImage = "";

        /**
         * User isAdmin.
         * @member {boolean} isAdmin
         * @memberof common.User
         * @instance
         */
        User.prototype.isAdmin = false;

        /**
         * User isVerified.
         * @member {boolean} isVerified
         * @memberof common.User
         * @instance
         */
        User.prototype.isVerified = false;

        /**
         * User verificationCode.
         * @member {string} verificationCode
         * @memberof common.User
         * @instance
         */
        User.prototype.verificationCode = "";

        /**
         * User citizenShipFront.
         * @member {string} citizenShipFront
         * @memberof common.User
         * @instance
         */
        User.prototype.citizenShipFront = "";

        /**
         * User citizenShipBack.
         * @member {string} citizenShipBack
         * @memberof common.User
         * @instance
         */
        User.prototype.citizenShipBack = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof common.User
         * @static
         * @param {common.IUser=} [properties] Properties to set
         * @returns {common.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link common.User.verify|verify} messages.
         * @function encode
         * @memberof common.User
         * @static
         * @param {common.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.midName != null && Object.hasOwnProperty.call(message, "midName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.midName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.lastName);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.gender);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.age);
            if (message.contact != null && Object.hasOwnProperty.call(message, "contact"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.contact);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.password);
            if (message.profileImage != null && Object.hasOwnProperty.call(message, "profileImage"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.profileImage);
            if (message.isAdmin != null && Object.hasOwnProperty.call(message, "isAdmin"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.isAdmin);
            if (message.isVerified != null && Object.hasOwnProperty.call(message, "isVerified"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isVerified);
            if (message.verificationCode != null && Object.hasOwnProperty.call(message, "verificationCode"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.verificationCode);
            if (message.citizenShipFront != null && Object.hasOwnProperty.call(message, "citizenShipFront"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.citizenShipFront);
            if (message.citizenShipBack != null && Object.hasOwnProperty.call(message, "citizenShipBack"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.citizenShipBack);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link common.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.User
         * @static
         * @param {common.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof common.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.firstName = reader.string();
                        break;
                    }
                case 3: {
                        message.midName = reader.string();
                        break;
                    }
                case 4: {
                        message.lastName = reader.string();
                        break;
                    }
                case 5: {
                        message.gender = reader.int32();
                        break;
                    }
                case 6: {
                        message.age = reader.int32();
                        break;
                    }
                case 7: {
                        message.contact = reader.string();
                        break;
                    }
                case 8: {
                        message.email = reader.string();
                        break;
                    }
                case 9: {
                        message.password = reader.string();
                        break;
                    }
                case 10: {
                        message.profileImage = reader.string();
                        break;
                    }
                case 11: {
                        message.isAdmin = reader.bool();
                        break;
                    }
                case 12: {
                        message.isVerified = reader.bool();
                        break;
                    }
                case 13: {
                        message.verificationCode = reader.string();
                        break;
                    }
                case 14: {
                        message.citizenShipFront = reader.string();
                        break;
                    }
                case 15: {
                        message.citizenShipBack = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof common.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.midName != null && message.hasOwnProperty("midName"))
                if (!$util.isString(message.midName))
                    return "midName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                switch (message.gender) {
                default:
                    return "gender: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.contact != null && message.hasOwnProperty("contact"))
                if (!$util.isString(message.contact))
                    return "contact: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.profileImage != null && message.hasOwnProperty("profileImage"))
                if (!$util.isString(message.profileImage))
                    return "profileImage: string expected";
            if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                if (typeof message.isAdmin !== "boolean")
                    return "isAdmin: boolean expected";
            if (message.isVerified != null && message.hasOwnProperty("isVerified"))
                if (typeof message.isVerified !== "boolean")
                    return "isVerified: boolean expected";
            if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                if (!$util.isString(message.verificationCode))
                    return "verificationCode: string expected";
            if (message.citizenShipFront != null && message.hasOwnProperty("citizenShipFront"))
                if (!$util.isString(message.citizenShipFront))
                    return "citizenShipFront: string expected";
            if (message.citizenShipBack != null && message.hasOwnProperty("citizenShipBack"))
                if (!$util.isString(message.citizenShipBack))
                    return "citizenShipBack: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.common.User)
                return object;
            var message = new $root.common.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.midName != null)
                message.midName = String(object.midName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            switch (object.gender) {
            default:
                if (typeof object.gender === "number") {
                    message.gender = object.gender;
                    break;
                }
                break;
            case "MALE":
            case 0:
                message.gender = 0;
                break;
            case "FEMALE":
            case 1:
                message.gender = 1;
                break;
            case "OTHERS":
            case 2:
                message.gender = 2;
                break;
            }
            if (object.age != null)
                message.age = object.age | 0;
            if (object.contact != null)
                message.contact = String(object.contact);
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            if (object.profileImage != null)
                message.profileImage = String(object.profileImage);
            if (object.isAdmin != null)
                message.isAdmin = Boolean(object.isAdmin);
            if (object.isVerified != null)
                message.isVerified = Boolean(object.isVerified);
            if (object.verificationCode != null)
                message.verificationCode = String(object.verificationCode);
            if (object.citizenShipFront != null)
                message.citizenShipFront = String(object.citizenShipFront);
            if (object.citizenShipBack != null)
                message.citizenShipBack = String(object.citizenShipBack);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.User
         * @static
         * @param {common.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.firstName = "";
                object.midName = "";
                object.lastName = "";
                object.gender = options.enums === String ? "MALE" : 0;
                object.age = 0;
                object.contact = "";
                object.email = "";
                object.password = "";
                object.profileImage = "";
                object.isAdmin = false;
                object.isVerified = false;
                object.verificationCode = "";
                object.citizenShipFront = "";
                object.citizenShipBack = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.midName != null && message.hasOwnProperty("midName"))
                object.midName = message.midName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = options.enums === String ? $root.common.Gender[message.gender] === undefined ? message.gender : $root.common.Gender[message.gender] : message.gender;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.contact != null && message.hasOwnProperty("contact"))
                object.contact = message.contact;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.profileImage != null && message.hasOwnProperty("profileImage"))
                object.profileImage = message.profileImage;
            if (message.isAdmin != null && message.hasOwnProperty("isAdmin"))
                object.isAdmin = message.isAdmin;
            if (message.isVerified != null && message.hasOwnProperty("isVerified"))
                object.isVerified = message.isVerified;
            if (message.verificationCode != null && message.hasOwnProperty("verificationCode"))
                object.verificationCode = message.verificationCode;
            if (message.citizenShipFront != null && message.hasOwnProperty("citizenShipFront"))
                object.citizenShipFront = message.citizenShipFront;
            if (message.citizenShipBack != null && message.hasOwnProperty("citizenShipBack"))
                object.citizenShipBack = message.citizenShipBack;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof common.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof common.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.User";
        };

        return User;
    })();

    common.Infrastructure = (function() {

        /**
         * Properties of an Infrastructure.
         * @memberof common
         * @interface IInfrastructure
         * @property {string|null} [id] Infrastructure id
         * @property {string|null} [name] Infrastructure name
         * @property {common.InfraType|null} [type] Infrastructure type
         * @property {string|null} [details] Infrastructure details
         * @property {string|null} [createdAt] Infrastructure createdAt
         * @property {string|null} [updatedAt] Infrastructure updatedAt
         */

        /**
         * Constructs a new Infrastructure.
         * @memberof common
         * @classdesc Represents an Infrastructure.
         * @implements IInfrastructure
         * @constructor
         * @param {common.IInfrastructure=} [properties] Properties to set
         */
        function Infrastructure(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Infrastructure id.
         * @member {string} id
         * @memberof common.Infrastructure
         * @instance
         */
        Infrastructure.prototype.id = "";

        /**
         * Infrastructure name.
         * @member {string} name
         * @memberof common.Infrastructure
         * @instance
         */
        Infrastructure.prototype.name = "";

        /**
         * Infrastructure type.
         * @member {common.InfraType} type
         * @memberof common.Infrastructure
         * @instance
         */
        Infrastructure.prototype.type = 0;

        /**
         * Infrastructure details.
         * @member {string} details
         * @memberof common.Infrastructure
         * @instance
         */
        Infrastructure.prototype.details = "";

        /**
         * Infrastructure createdAt.
         * @member {string} createdAt
         * @memberof common.Infrastructure
         * @instance
         */
        Infrastructure.prototype.createdAt = "";

        /**
         * Infrastructure updatedAt.
         * @member {string} updatedAt
         * @memberof common.Infrastructure
         * @instance
         */
        Infrastructure.prototype.updatedAt = "";

        /**
         * Creates a new Infrastructure instance using the specified properties.
         * @function create
         * @memberof common.Infrastructure
         * @static
         * @param {common.IInfrastructure=} [properties] Properties to set
         * @returns {common.Infrastructure} Infrastructure instance
         */
        Infrastructure.create = function create(properties) {
            return new Infrastructure(properties);
        };

        /**
         * Encodes the specified Infrastructure message. Does not implicitly {@link common.Infrastructure.verify|verify} messages.
         * @function encode
         * @memberof common.Infrastructure
         * @static
         * @param {common.IInfrastructure} message Infrastructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Infrastructure.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.details);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Infrastructure message, length delimited. Does not implicitly {@link common.Infrastructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Infrastructure
         * @static
         * @param {common.IInfrastructure} message Infrastructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Infrastructure.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Infrastructure message from the specified reader or buffer.
         * @function decode
         * @memberof common.Infrastructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Infrastructure} Infrastructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Infrastructure.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Infrastructure();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.details = reader.string();
                        break;
                    }
                case 5: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 6: {
                        message.updatedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Infrastructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Infrastructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Infrastructure} Infrastructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Infrastructure.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Infrastructure message.
         * @function verify
         * @memberof common.Infrastructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Infrastructure.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.details != null && message.hasOwnProperty("details"))
                if (!$util.isString(message.details))
                    return "details: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates an Infrastructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Infrastructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Infrastructure} Infrastructure
         */
        Infrastructure.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Infrastructure)
                return object;
            var message = new $root.common.Infrastructure();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "ROAD":
            case 0:
                message.type = 0;
                break;
            case "BRIDGE":
            case 1:
                message.type = 1;
                break;
            case "PARK":
            case 2:
                message.type = 2;
                break;
            case "SCHOOL":
            case 3:
                message.type = 3;
                break;
            case "OTHER":
            case 4:
                message.type = 4;
                break;
            }
            if (object.details != null)
                message.details = String(object.details);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from an Infrastructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Infrastructure
         * @static
         * @param {common.Infrastructure} message Infrastructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Infrastructure.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.type = options.enums === String ? "ROAD" : 0;
                object.details = "";
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.common.InfraType[message.type] === undefined ? message.type : $root.common.InfraType[message.type] : message.type;
            if (message.details != null && message.hasOwnProperty("details"))
                object.details = message.details;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Infrastructure to JSON.
         * @function toJSON
         * @memberof common.Infrastructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Infrastructure.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Infrastructure
         * @function getTypeUrl
         * @memberof common.Infrastructure
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Infrastructure.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Infrastructure";
        };

        return Infrastructure;
    })();

    common.Report = (function() {

        /**
         * Properties of a Report.
         * @memberof common
         * @interface IReport
         * @property {string|null} [id] Report id
         * @property {string|null} [title] Report title
         * @property {string|null} [description] Report description
         * @property {common.Status|null} [status] Report status
         * @property {common.Priority|null} [priority] Report priority
         * @property {string|null} [userId] Report userId
         * @property {common.IUser|null} [user] Report user
         * @property {string|null} [infrastructureId] Report infrastructureId
         * @property {common.IInfrastructure|null} [infrastructure] Report infrastructure
         * @property {string|null} [locationId] Report locationId
         * @property {common.ILocation|null} [location] Report location
         * @property {Array.<common.IComment>|null} [comments] Report comments
         * @property {Array.<common.IMedia>|null} [media] Report media
         * @property {string|null} [createdAt] Report createdAt
         * @property {string|null} [updatedAt] Report updatedAt
         */

        /**
         * Constructs a new Report.
         * @memberof common
         * @classdesc Represents a Report.
         * @implements IReport
         * @constructor
         * @param {common.IReport=} [properties] Properties to set
         */
        function Report(properties) {
            this.comments = [];
            this.media = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Report id.
         * @member {string} id
         * @memberof common.Report
         * @instance
         */
        Report.prototype.id = "";

        /**
         * Report title.
         * @member {string} title
         * @memberof common.Report
         * @instance
         */
        Report.prototype.title = "";

        /**
         * Report description.
         * @member {string} description
         * @memberof common.Report
         * @instance
         */
        Report.prototype.description = "";

        /**
         * Report status.
         * @member {common.Status} status
         * @memberof common.Report
         * @instance
         */
        Report.prototype.status = 0;

        /**
         * Report priority.
         * @member {common.Priority} priority
         * @memberof common.Report
         * @instance
         */
        Report.prototype.priority = 0;

        /**
         * Report userId.
         * @member {string} userId
         * @memberof common.Report
         * @instance
         */
        Report.prototype.userId = "";

        /**
         * Report user.
         * @member {common.IUser|null|undefined} user
         * @memberof common.Report
         * @instance
         */
        Report.prototype.user = null;

        /**
         * Report infrastructureId.
         * @member {string} infrastructureId
         * @memberof common.Report
         * @instance
         */
        Report.prototype.infrastructureId = "";

        /**
         * Report infrastructure.
         * @member {common.IInfrastructure|null|undefined} infrastructure
         * @memberof common.Report
         * @instance
         */
        Report.prototype.infrastructure = null;

        /**
         * Report locationId.
         * @member {string} locationId
         * @memberof common.Report
         * @instance
         */
        Report.prototype.locationId = "";

        /**
         * Report location.
         * @member {common.ILocation|null|undefined} location
         * @memberof common.Report
         * @instance
         */
        Report.prototype.location = null;

        /**
         * Report comments.
         * @member {Array.<common.IComment>} comments
         * @memberof common.Report
         * @instance
         */
        Report.prototype.comments = $util.emptyArray;

        /**
         * Report media.
         * @member {Array.<common.IMedia>} media
         * @memberof common.Report
         * @instance
         */
        Report.prototype.media = $util.emptyArray;

        /**
         * Report createdAt.
         * @member {string} createdAt
         * @memberof common.Report
         * @instance
         */
        Report.prototype.createdAt = "";

        /**
         * Report updatedAt.
         * @member {string} updatedAt
         * @memberof common.Report
         * @instance
         */
        Report.prototype.updatedAt = "";

        /**
         * Creates a new Report instance using the specified properties.
         * @function create
         * @memberof common.Report
         * @static
         * @param {common.IReport=} [properties] Properties to set
         * @returns {common.Report} Report instance
         */
        Report.create = function create(properties) {
            return new Report(properties);
        };

        /**
         * Encodes the specified Report message. Does not implicitly {@link common.Report.verify|verify} messages.
         * @function encode
         * @memberof common.Report
         * @static
         * @param {common.IReport} message Report message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Report.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.priority != null && Object.hasOwnProperty.call(message, "priority"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.priority);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.userId);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.common.User.encode(message.user, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.infrastructureId != null && Object.hasOwnProperty.call(message, "infrastructureId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.infrastructureId);
            if (message.infrastructure != null && Object.hasOwnProperty.call(message, "infrastructure"))
                $root.common.Infrastructure.encode(message.infrastructure, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.locationId != null && Object.hasOwnProperty.call(message, "locationId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.locationId);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                $root.common.Location.encode(message.location, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.comments != null && message.comments.length)
                for (var i = 0; i < message.comments.length; ++i)
                    $root.common.Comment.encode(message.comments[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.media != null && message.media.length)
                for (var i = 0; i < message.media.length; ++i)
                    $root.common.Media.encode(message.media[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Report message, length delimited. Does not implicitly {@link common.Report.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Report
         * @static
         * @param {common.IReport} message Report message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Report.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Report message from the specified reader or buffer.
         * @function decode
         * @memberof common.Report
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Report} Report
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Report.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Report();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.title = reader.string();
                        break;
                    }
                case 3: {
                        message.description = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.int32();
                        break;
                    }
                case 5: {
                        message.priority = reader.int32();
                        break;
                    }
                case 6: {
                        message.userId = reader.string();
                        break;
                    }
                case 7: {
                        message.user = $root.common.User.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.infrastructureId = reader.string();
                        break;
                    }
                case 9: {
                        message.infrastructure = $root.common.Infrastructure.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.locationId = reader.string();
                        break;
                    }
                case 11: {
                        message.location = $root.common.Location.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        if (!(message.comments && message.comments.length))
                            message.comments = [];
                        message.comments.push($root.common.Comment.decode(reader, reader.uint32()));
                        break;
                    }
                case 13: {
                        if (!(message.media && message.media.length))
                            message.media = [];
                        message.media.push($root.common.Media.decode(reader, reader.uint32()));
                        break;
                    }
                case 14: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 15: {
                        message.updatedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Report message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Report
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Report} Report
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Report.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Report message.
         * @function verify
         * @memberof common.Report
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Report.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.priority != null && message.hasOwnProperty("priority"))
                switch (message.priority) {
                default:
                    return "priority: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.common.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.infrastructureId != null && message.hasOwnProperty("infrastructureId"))
                if (!$util.isString(message.infrastructureId))
                    return "infrastructureId: string expected";
            if (message.infrastructure != null && message.hasOwnProperty("infrastructure")) {
                var error = $root.common.Infrastructure.verify(message.infrastructure);
                if (error)
                    return "infrastructure." + error;
            }
            if (message.locationId != null && message.hasOwnProperty("locationId"))
                if (!$util.isString(message.locationId))
                    return "locationId: string expected";
            if (message.location != null && message.hasOwnProperty("location")) {
                var error = $root.common.Location.verify(message.location);
                if (error)
                    return "location." + error;
            }
            if (message.comments != null && message.hasOwnProperty("comments")) {
                if (!Array.isArray(message.comments))
                    return "comments: array expected";
                for (var i = 0; i < message.comments.length; ++i) {
                    var error = $root.common.Comment.verify(message.comments[i]);
                    if (error)
                        return "comments." + error;
                }
            }
            if (message.media != null && message.hasOwnProperty("media")) {
                if (!Array.isArray(message.media))
                    return "media: array expected";
                for (var i = 0; i < message.media.length; ++i) {
                    var error = $root.common.Media.verify(message.media[i]);
                    if (error)
                        return "media." + error;
                }
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a Report message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Report
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Report} Report
         */
        Report.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Report)
                return object;
            var message = new $root.common.Report();
            if (object.id != null)
                message.id = String(object.id);
            if (object.title != null)
                message.title = String(object.title);
            if (object.description != null)
                message.description = String(object.description);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "PENDING":
            case 0:
                message.status = 0;
                break;
            case "INPROGRESS":
            case 1:
                message.status = 1;
                break;
            case "RESOLVED":
            case 2:
                message.status = 2;
                break;
            }
            switch (object.priority) {
            default:
                if (typeof object.priority === "number") {
                    message.priority = object.priority;
                    break;
                }
                break;
            case "LOW":
            case 0:
                message.priority = 0;
                break;
            case "MEDIUM":
            case 1:
                message.priority = 1;
                break;
            case "HIGH":
            case 2:
                message.priority = 2;
                break;
            }
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".common.Report.user: object expected");
                message.user = $root.common.User.fromObject(object.user);
            }
            if (object.infrastructureId != null)
                message.infrastructureId = String(object.infrastructureId);
            if (object.infrastructure != null) {
                if (typeof object.infrastructure !== "object")
                    throw TypeError(".common.Report.infrastructure: object expected");
                message.infrastructure = $root.common.Infrastructure.fromObject(object.infrastructure);
            }
            if (object.locationId != null)
                message.locationId = String(object.locationId);
            if (object.location != null) {
                if (typeof object.location !== "object")
                    throw TypeError(".common.Report.location: object expected");
                message.location = $root.common.Location.fromObject(object.location);
            }
            if (object.comments) {
                if (!Array.isArray(object.comments))
                    throw TypeError(".common.Report.comments: array expected");
                message.comments = [];
                for (var i = 0; i < object.comments.length; ++i) {
                    if (typeof object.comments[i] !== "object")
                        throw TypeError(".common.Report.comments: object expected");
                    message.comments[i] = $root.common.Comment.fromObject(object.comments[i]);
                }
            }
            if (object.media) {
                if (!Array.isArray(object.media))
                    throw TypeError(".common.Report.media: array expected");
                message.media = [];
                for (var i = 0; i < object.media.length; ++i) {
                    if (typeof object.media[i] !== "object")
                        throw TypeError(".common.Report.media: object expected");
                    message.media[i] = $root.common.Media.fromObject(object.media[i]);
                }
            }
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a Report message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Report
         * @static
         * @param {common.Report} message Report
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Report.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.comments = [];
                object.media = [];
            }
            if (options.defaults) {
                object.id = "";
                object.title = "";
                object.description = "";
                object.status = options.enums === String ? "PENDING" : 0;
                object.priority = options.enums === String ? "LOW" : 0;
                object.userId = "";
                object.user = null;
                object.infrastructureId = "";
                object.infrastructure = null;
                object.locationId = "";
                object.location = null;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.common.Status[message.status] === undefined ? message.status : $root.common.Status[message.status] : message.status;
            if (message.priority != null && message.hasOwnProperty("priority"))
                object.priority = options.enums === String ? $root.common.Priority[message.priority] === undefined ? message.priority : $root.common.Priority[message.priority] : message.priority;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.common.User.toObject(message.user, options);
            if (message.infrastructureId != null && message.hasOwnProperty("infrastructureId"))
                object.infrastructureId = message.infrastructureId;
            if (message.infrastructure != null && message.hasOwnProperty("infrastructure"))
                object.infrastructure = $root.common.Infrastructure.toObject(message.infrastructure, options);
            if (message.locationId != null && message.hasOwnProperty("locationId"))
                object.locationId = message.locationId;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = $root.common.Location.toObject(message.location, options);
            if (message.comments && message.comments.length) {
                object.comments = [];
                for (var j = 0; j < message.comments.length; ++j)
                    object.comments[j] = $root.common.Comment.toObject(message.comments[j], options);
            }
            if (message.media && message.media.length) {
                object.media = [];
                for (var j = 0; j < message.media.length; ++j)
                    object.media[j] = $root.common.Media.toObject(message.media[j], options);
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Report to JSON.
         * @function toJSON
         * @memberof common.Report
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Report.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Report
         * @function getTypeUrl
         * @memberof common.Report
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Report.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Report";
        };

        return Report;
    })();

    common.Location = (function() {

        /**
         * Properties of a Location.
         * @memberof common
         * @interface ILocation
         * @property {string|null} [id] Location id
         * @property {number|null} [latitude] Location latitude
         * @property {number|null} [longitude] Location longitude
         * @property {string|null} [address] Location address
         * @property {Array.<common.IReport>|null} [reports] Location reports
         * @property {string|null} [createdAt] Location createdAt
         * @property {string|null} [updatedAt] Location updatedAt
         */

        /**
         * Constructs a new Location.
         * @memberof common
         * @classdesc Represents a Location.
         * @implements ILocation
         * @constructor
         * @param {common.ILocation=} [properties] Properties to set
         */
        function Location(properties) {
            this.reports = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Location id.
         * @member {string} id
         * @memberof common.Location
         * @instance
         */
        Location.prototype.id = "";

        /**
         * Location latitude.
         * @member {number} latitude
         * @memberof common.Location
         * @instance
         */
        Location.prototype.latitude = 0;

        /**
         * Location longitude.
         * @member {number} longitude
         * @memberof common.Location
         * @instance
         */
        Location.prototype.longitude = 0;

        /**
         * Location address.
         * @member {string} address
         * @memberof common.Location
         * @instance
         */
        Location.prototype.address = "";

        /**
         * Location reports.
         * @member {Array.<common.IReport>} reports
         * @memberof common.Location
         * @instance
         */
        Location.prototype.reports = $util.emptyArray;

        /**
         * Location createdAt.
         * @member {string} createdAt
         * @memberof common.Location
         * @instance
         */
        Location.prototype.createdAt = "";

        /**
         * Location updatedAt.
         * @member {string} updatedAt
         * @memberof common.Location
         * @instance
         */
        Location.prototype.updatedAt = "";

        /**
         * Creates a new Location instance using the specified properties.
         * @function create
         * @memberof common.Location
         * @static
         * @param {common.ILocation=} [properties] Properties to set
         * @returns {common.Location} Location instance
         */
        Location.create = function create(properties) {
            return new Location(properties);
        };

        /**
         * Encodes the specified Location message. Does not implicitly {@link common.Location.verify|verify} messages.
         * @function encode
         * @memberof common.Location
         * @static
         * @param {common.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.latitude);
            if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.longitude);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.address);
            if (message.reports != null && message.reports.length)
                for (var i = 0; i < message.reports.length; ++i)
                    $root.common.Report.encode(message.reports[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link common.Location.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Location
         * @static
         * @param {common.ILocation} message Location message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Location.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @function decode
         * @memberof common.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Location();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.latitude = reader.double();
                        break;
                    }
                case 3: {
                        message.longitude = reader.double();
                        break;
                    }
                case 4: {
                        message.address = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.reports && message.reports.length))
                            message.reports = [];
                        message.reports.push($root.common.Report.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 7: {
                        message.updatedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Location
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Location} Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Location.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Location message.
         * @function verify
         * @memberof common.Location
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Location.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                if (typeof message.latitude !== "number")
                    return "latitude: number expected";
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                if (typeof message.longitude !== "number")
                    return "longitude: number expected";
            if (message.address != null && message.hasOwnProperty("address"))
                if (!$util.isString(message.address))
                    return "address: string expected";
            if (message.reports != null && message.hasOwnProperty("reports")) {
                if (!Array.isArray(message.reports))
                    return "reports: array expected";
                for (var i = 0; i < message.reports.length; ++i) {
                    var error = $root.common.Report.verify(message.reports[i]);
                    if (error)
                        return "reports." + error;
                }
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Location
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Location} Location
         */
        Location.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Location)
                return object;
            var message = new $root.common.Location();
            if (object.id != null)
                message.id = String(object.id);
            if (object.latitude != null)
                message.latitude = Number(object.latitude);
            if (object.longitude != null)
                message.longitude = Number(object.longitude);
            if (object.address != null)
                message.address = String(object.address);
            if (object.reports) {
                if (!Array.isArray(object.reports))
                    throw TypeError(".common.Location.reports: array expected");
                message.reports = [];
                for (var i = 0; i < object.reports.length; ++i) {
                    if (typeof object.reports[i] !== "object")
                        throw TypeError(".common.Location.reports: object expected");
                    message.reports[i] = $root.common.Report.fromObject(object.reports[i]);
                }
            }
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Location
         * @static
         * @param {common.Location} message Location
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Location.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.reports = [];
            if (options.defaults) {
                object.id = "";
                object.latitude = 0;
                object.longitude = 0;
                object.address = "";
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.latitude != null && message.hasOwnProperty("latitude"))
                object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
            if (message.longitude != null && message.hasOwnProperty("longitude"))
                object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = message.address;
            if (message.reports && message.reports.length) {
                object.reports = [];
                for (var j = 0; j < message.reports.length; ++j)
                    object.reports[j] = $root.common.Report.toObject(message.reports[j], options);
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Location to JSON.
         * @function toJSON
         * @memberof common.Location
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Location.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Location
         * @function getTypeUrl
         * @memberof common.Location
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Location.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Location";
        };

        return Location;
    })();

    common.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof common
         * @interface IComment
         * @property {string|null} [id] Comment id
         * @property {string|null} [content] Comment content
         * @property {string|null} [reportId] Comment reportId
         * @property {common.IReport|null} [report] Comment report
         * @property {string|null} [userId] Comment userId
         * @property {common.IUser|null} [user] Comment user
         * @property {string|null} [createdAt] Comment createdAt
         * @property {string|null} [updatedAt] Comment updatedAt
         */

        /**
         * Constructs a new Comment.
         * @memberof common
         * @classdesc Represents a Comment.
         * @implements IComment
         * @constructor
         * @param {common.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment id.
         * @member {string} id
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.id = "";

        /**
         * Comment content.
         * @member {string} content
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.content = "";

        /**
         * Comment reportId.
         * @member {string} reportId
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.reportId = "";

        /**
         * Comment report.
         * @member {common.IReport|null|undefined} report
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.report = null;

        /**
         * Comment userId.
         * @member {string} userId
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.userId = "";

        /**
         * Comment user.
         * @member {common.IUser|null|undefined} user
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.user = null;

        /**
         * Comment createdAt.
         * @member {string} createdAt
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.createdAt = "";

        /**
         * Comment updatedAt.
         * @member {string} updatedAt
         * @memberof common.Comment
         * @instance
         */
        Comment.prototype.updatedAt = "";

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof common.Comment
         * @static
         * @param {common.IComment=} [properties] Properties to set
         * @returns {common.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link common.Comment.verify|verify} messages.
         * @function encode
         * @memberof common.Comment
         * @static
         * @param {common.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.reportId);
            if (message.report != null && Object.hasOwnProperty.call(message, "report"))
                $root.common.Report.encode(message.report, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.userId);
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.common.User.encode(message.user, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link common.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Comment
         * @static
         * @param {common.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof common.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Comment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.reportId = reader.string();
                        break;
                    }
                case 4: {
                        message.report = $root.common.Report.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.userId = reader.string();
                        break;
                    }
                case 6: {
                        message.user = $root.common.User.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 8: {
                        message.updatedAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof common.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.reportId != null && message.hasOwnProperty("reportId"))
                if (!$util.isString(message.reportId))
                    return "reportId: string expected";
            if (message.report != null && message.hasOwnProperty("report")) {
                var error = $root.common.Report.verify(message.report);
                if (error)
                    return "report." + error;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                var error = $root.common.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Comment)
                return object;
            var message = new $root.common.Comment();
            if (object.id != null)
                message.id = String(object.id);
            if (object.content != null)
                message.content = String(object.content);
            if (object.reportId != null)
                message.reportId = String(object.reportId);
            if (object.report != null) {
                if (typeof object.report !== "object")
                    throw TypeError(".common.Comment.report: object expected");
                message.report = $root.common.Report.fromObject(object.report);
            }
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".common.Comment.user: object expected");
                message.user = $root.common.User.fromObject(object.user);
            }
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Comment
         * @static
         * @param {common.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.content = "";
                object.reportId = "";
                object.report = null;
                object.userId = "";
                object.user = null;
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.reportId != null && message.hasOwnProperty("reportId"))
                object.reportId = message.reportId;
            if (message.report != null && message.hasOwnProperty("report"))
                object.report = $root.common.Report.toObject(message.report, options);
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.common.User.toObject(message.user, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof common.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Comment
         * @function getTypeUrl
         * @memberof common.Comment
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Comment.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Comment";
        };

        return Comment;
    })();

    common.Media = (function() {

        /**
         * Properties of a Media.
         * @memberof common
         * @interface IMedia
         * @property {string|null} [id] Media id
         * @property {string|null} [fileUrl] Media fileUrl
         * @property {common.FileType|null} [fileType] Media fileType
         * @property {string|null} [reportId] Media reportId
         * @property {common.IReport|null} [report] Media report
         * @property {string|null} [createdAt] Media createdAt
         */

        /**
         * Constructs a new Media.
         * @memberof common
         * @classdesc Represents a Media.
         * @implements IMedia
         * @constructor
         * @param {common.IMedia=} [properties] Properties to set
         */
        function Media(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Media id.
         * @member {string} id
         * @memberof common.Media
         * @instance
         */
        Media.prototype.id = "";

        /**
         * Media fileUrl.
         * @member {string} fileUrl
         * @memberof common.Media
         * @instance
         */
        Media.prototype.fileUrl = "";

        /**
         * Media fileType.
         * @member {common.FileType} fileType
         * @memberof common.Media
         * @instance
         */
        Media.prototype.fileType = 0;

        /**
         * Media reportId.
         * @member {string} reportId
         * @memberof common.Media
         * @instance
         */
        Media.prototype.reportId = "";

        /**
         * Media report.
         * @member {common.IReport|null|undefined} report
         * @memberof common.Media
         * @instance
         */
        Media.prototype.report = null;

        /**
         * Media createdAt.
         * @member {string} createdAt
         * @memberof common.Media
         * @instance
         */
        Media.prototype.createdAt = "";

        /**
         * Creates a new Media instance using the specified properties.
         * @function create
         * @memberof common.Media
         * @static
         * @param {common.IMedia=} [properties] Properties to set
         * @returns {common.Media} Media instance
         */
        Media.create = function create(properties) {
            return new Media(properties);
        };

        /**
         * Encodes the specified Media message. Does not implicitly {@link common.Media.verify|verify} messages.
         * @function encode
         * @memberof common.Media
         * @static
         * @param {common.IMedia} message Media message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Media.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.fileUrl != null && Object.hasOwnProperty.call(message, "fileUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.fileUrl);
            if (message.fileType != null && Object.hasOwnProperty.call(message, "fileType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.fileType);
            if (message.reportId != null && Object.hasOwnProperty.call(message, "reportId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.reportId);
            if (message.report != null && Object.hasOwnProperty.call(message, "report"))
                $root.common.Report.encode(message.report, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.createdAt);
            return writer;
        };

        /**
         * Encodes the specified Media message, length delimited. Does not implicitly {@link common.Media.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Media
         * @static
         * @param {common.IMedia} message Media message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Media.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Media message from the specified reader or buffer.
         * @function decode
         * @memberof common.Media
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Media} Media
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Media.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Media();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.string();
                        break;
                    }
                case 2: {
                        message.fileUrl = reader.string();
                        break;
                    }
                case 3: {
                        message.fileType = reader.int32();
                        break;
                    }
                case 4: {
                        message.reportId = reader.string();
                        break;
                    }
                case 5: {
                        message.report = $root.common.Report.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.createdAt = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Media message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Media
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Media} Media
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Media.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Media message.
         * @function verify
         * @memberof common.Media
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Media.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                if (!$util.isString(message.fileUrl))
                    return "fileUrl: string expected";
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                switch (message.fileType) {
                default:
                    return "fileType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.reportId != null && message.hasOwnProperty("reportId"))
                if (!$util.isString(message.reportId))
                    return "reportId: string expected";
            if (message.report != null && message.hasOwnProperty("report")) {
                var error = $root.common.Report.verify(message.report);
                if (error)
                    return "report." + error;
            }
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            return null;
        };

        /**
         * Creates a Media message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.Media
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.Media} Media
         */
        Media.fromObject = function fromObject(object) {
            if (object instanceof $root.common.Media)
                return object;
            var message = new $root.common.Media();
            if (object.id != null)
                message.id = String(object.id);
            if (object.fileUrl != null)
                message.fileUrl = String(object.fileUrl);
            switch (object.fileType) {
            default:
                if (typeof object.fileType === "number") {
                    message.fileType = object.fileType;
                    break;
                }
                break;
            case "IMAGE":
            case 0:
                message.fileType = 0;
                break;
            case "VIDEO":
            case 1:
                message.fileType = 1;
                break;
            }
            if (object.reportId != null)
                message.reportId = String(object.reportId);
            if (object.report != null) {
                if (typeof object.report !== "object")
                    throw TypeError(".common.Media.report: object expected");
                message.report = $root.common.Report.fromObject(object.report);
            }
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            return message;
        };

        /**
         * Creates a plain object from a Media message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.Media
         * @static
         * @param {common.Media} message Media
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Media.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.fileUrl = "";
                object.fileType = options.enums === String ? "IMAGE" : 0;
                object.reportId = "";
                object.report = null;
                object.createdAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.fileUrl != null && message.hasOwnProperty("fileUrl"))
                object.fileUrl = message.fileUrl;
            if (message.fileType != null && message.hasOwnProperty("fileType"))
                object.fileType = options.enums === String ? $root.common.FileType[message.fileType] === undefined ? message.fileType : $root.common.FileType[message.fileType] : message.fileType;
            if (message.reportId != null && message.hasOwnProperty("reportId"))
                object.reportId = message.reportId;
            if (message.report != null && message.hasOwnProperty("report"))
                object.report = $root.common.Report.toObject(message.report, options);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            return object;
        };

        /**
         * Converts this Media to JSON.
         * @function toJSON
         * @memberof common.Media
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Media.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Media
         * @function getTypeUrl
         * @memberof common.Media
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Media.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/common.Media";
        };

        return Media;
    })();

    return common;
})();

module.exports = $root;
