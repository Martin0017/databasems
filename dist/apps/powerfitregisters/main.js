/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PowerfitregistersModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const points_module_1 = __webpack_require__(5);
const useractivity_module_1 = __webpack_require__(10);
const claimedrewards_module_1 = __webpack_require__(14);
const supportmessage_module_1 = __webpack_require__(19);
let PowerfitregistersModule = exports.PowerfitregistersModule = class PowerfitregistersModule {
};
exports.PowerfitregistersModule = PowerfitregistersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://admin1726:Disturber1726@powerfitlogs.ubnq4yr.mongodb.net/?retryWrites=true&w=majority'),
            points_module_1.PointsModule, useractivity_module_1.UseractivityModule, claimedrewards_module_1.ClaimedrewardsModule, supportmessage_module_1.SupportmessageModule
        ],
        controllers: [],
        providers: [],
    })
], PowerfitregistersModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointsModule = void 0;
const common_1 = __webpack_require__(3);
const points_controller_1 = __webpack_require__(6);
const points_service_1 = __webpack_require__(7);
const mongoose_1 = __webpack_require__(4);
const points_schema_1 = __webpack_require__(8);
let PointsModule = exports.PointsModule = class PointsModule {
};
exports.PointsModule = PointsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: points_schema_1.Points.name, schema: points_schema_1.PointsSchema }])],
        controllers: [points_controller_1.PointsController],
        providers: [points_service_1.PointsService]
    })
], PointsModule);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointsController = void 0;
const common_1 = __webpack_require__(3);
const points_service_1 = __webpack_require__(7);
let PointsController = exports.PointsController = class PointsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        return this.itemsService.findOne(id);
    }
    findByEmail(searchItemDto) {
        return this.itemsService.findByEmail(searchItemDto.email);
    }
    update(id, updateItemDto) {
        return this.itemsService.update(id, updateItemDto);
    }
    remove(id) {
        return this.itemsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PointsController.prototype, "remove", null);
exports.PointsController = PointsController = __decorate([
    (0, common_1.Controller)('points'),
    __metadata("design:paramtypes", [typeof (_a = typeof points_service_1.PointsService !== "undefined" && points_service_1.PointsService) === "function" ? _a : Object])
], PointsController);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointsService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const points_schema_1 = __webpack_require__(8);
const mongoose_2 = __webpack_require__(9);
let PointsService = exports.PointsService = class PointsService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(createItemDto) {
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }
    async findAll() {
        return this.itemModel.find().exec();
    }
    async findOne(id) {
        return this.itemModel.findById(id).exec();
    }
    async findByEmail(email) {
        return this.itemModel.find({ email }).exec();
    }
    async update(id, updateItemDto) {
        return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
    async remove(id) {
        return this.itemModel.findByIdAndRemove(id).exec();
    }
};
exports.PointsService = PointsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(points_schema_1.Points.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], PointsService);


/***/ }),
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointsSchema = exports.Points = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let Points = exports.Points = class Points extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Points.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Points.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Points.prototype, "points", void 0);
exports.Points = Points = __decorate([
    (0, mongoose_1.Schema)()
], Points);
exports.PointsSchema = mongoose_1.SchemaFactory.createForClass(Points);


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseractivityModule = void 0;
const common_1 = __webpack_require__(3);
const useractivity_controller_1 = __webpack_require__(11);
const useractivity_service_1 = __webpack_require__(12);
const mongoose_1 = __webpack_require__(4);
const user_activity_1 = __webpack_require__(13);
let UseractivityModule = exports.UseractivityModule = class UseractivityModule {
};
exports.UseractivityModule = UseractivityModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: user_activity_1.User_Activity.name, schema: user_activity_1.UserActivitySchema }])],
        controllers: [useractivity_controller_1.UseractivityController],
        providers: [useractivity_service_1.UseractivityService]
    })
], UseractivityModule);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseractivityController = void 0;
const common_1 = __webpack_require__(3);
const useractivity_service_1 = __webpack_require__(12);
let UseractivityController = exports.UseractivityController = class UseractivityController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        return this.itemsService.findOne(id);
    }
    findByEmail(searchItemDto) {
        return this.itemsService.findByEmail(searchItemDto.email);
    }
    update(id, updateItemDto) {
        return this.itemsService.update(id, updateItemDto);
    }
    remove(id) {
        return this.itemsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UseractivityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UseractivityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UseractivityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UseractivityController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UseractivityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UseractivityController.prototype, "remove", null);
exports.UseractivityController = UseractivityController = __decorate([
    (0, common_1.Controller)('useractivity'),
    __metadata("design:paramtypes", [typeof (_a = typeof useractivity_service_1.UseractivityService !== "undefined" && useractivity_service_1.UseractivityService) === "function" ? _a : Object])
], UseractivityController);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UseractivityService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const user_activity_1 = __webpack_require__(13);
const mongoose_2 = __webpack_require__(9);
let UseractivityService = exports.UseractivityService = class UseractivityService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(createItemDto) {
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }
    async findAll() {
        return this.itemModel.find().exec();
    }
    async findOne(id) {
        return this.itemModel.findById(id).exec();
    }
    async findByEmail(email) {
        console.log(email);
        return this.itemModel.findOne({ email }).exec();
    }
    async update(id, updateItemDto) {
        return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
    async remove(id) {
        return this.itemModel.findByIdAndRemove(id).exec();
    }
};
exports.UseractivityService = UseractivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_activity_1.User_Activity.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UseractivityService);


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserActivitySchema = exports.User_Activity = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let User_Activity = exports.User_Activity = class User_Activity extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User_Activity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User_Activity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User_Activity.prototype, "activity", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User_Activity.prototype, "start_time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User_Activity.prototype, "end_time", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], User_Activity.prototype, "steeps", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], User_Activity.prototype, "final_goal", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], User_Activity.prototype, "in_process", void 0);
exports.User_Activity = User_Activity = __decorate([
    (0, mongoose_1.Schema)()
], User_Activity);
exports.UserActivitySchema = mongoose_1.SchemaFactory.createForClass(User_Activity);


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClaimedrewardsModule = void 0;
const common_1 = __webpack_require__(3);
const mongoose_module_1 = __webpack_require__(15);
const claimedrewards_controller_1 = __webpack_require__(16);
const claimedrewards_service_1 = __webpack_require__(17);
const claimed_rewards_schema_1 = __webpack_require__(18);
let ClaimedrewardsModule = exports.ClaimedrewardsModule = class ClaimedrewardsModule {
};
exports.ClaimedrewardsModule = ClaimedrewardsModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_module_1.MongooseModule.forFeature([{ name: claimed_rewards_schema_1.Claimed_Rewards.name, schema: claimed_rewards_schema_1.ClaimedRewardsSchema }])],
        controllers: [claimedrewards_controller_1.ClaimedrewardsController],
        providers: [claimedrewards_service_1.ClaimedrewardsService]
    })
], ClaimedrewardsModule);


/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/mongoose/dist/mongoose.module");

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClaimedrewardsController = void 0;
const common_1 = __webpack_require__(3);
const claimedrewards_service_1 = __webpack_require__(17);
let ClaimedrewardsController = exports.ClaimedrewardsController = class ClaimedrewardsController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        return this.itemsService.findOne(id);
    }
    findByEmail(searchItemDto) {
        return this.itemsService.findByEmail(searchItemDto.email);
    }
    update(id, updateItemDto) {
        return this.itemsService.update(id, updateItemDto);
    }
    remove(id) {
        return this.itemsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClaimedrewardsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClaimedrewardsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClaimedrewardsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClaimedrewardsController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClaimedrewardsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClaimedrewardsController.prototype, "remove", null);
exports.ClaimedrewardsController = ClaimedrewardsController = __decorate([
    (0, common_1.Controller)('claimed'),
    __metadata("design:paramtypes", [typeof (_a = typeof claimedrewards_service_1.ClaimedrewardsService !== "undefined" && claimedrewards_service_1.ClaimedrewardsService) === "function" ? _a : Object])
], ClaimedrewardsController);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClaimedrewardsService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
const claimed_rewards_schema_1 = __webpack_require__(18);
let ClaimedrewardsService = exports.ClaimedrewardsService = class ClaimedrewardsService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(createItemDto) {
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }
    async findAll() {
        return this.itemModel.find().exec();
    }
    async findOne(id) {
        return this.itemModel.findById(id).exec();
    }
    async findByEmail(email) {
        return this.itemModel.find({ email }).exec();
    }
    async update(id, updateItemDto) {
        return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
    async remove(id) {
        return this.itemModel.findByIdAndRemove(id).exec();
    }
};
exports.ClaimedrewardsService = ClaimedrewardsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(claimed_rewards_schema_1.Claimed_Rewards.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], ClaimedrewardsService);


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClaimedRewardsSchema = exports.Claimed_Rewards = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let Claimed_Rewards = exports.Claimed_Rewards = class Claimed_Rewards extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Claimed_Rewards.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Claimed_Rewards.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Claimed_Rewards.prototype, "name_reward", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Claimed_Rewards.prototype, "points_reward", void 0);
exports.Claimed_Rewards = Claimed_Rewards = __decorate([
    (0, mongoose_1.Schema)()
], Claimed_Rewards);
exports.ClaimedRewardsSchema = mongoose_1.SchemaFactory.createForClass(Claimed_Rewards);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportmessageModule = void 0;
const common_1 = __webpack_require__(3);
const supportmessage_controller_1 = __webpack_require__(20);
const supportmessage_service_1 = __webpack_require__(21);
const mongoose_1 = __webpack_require__(4);
const support_message_1 = __webpack_require__(22);
let SupportmessageModule = exports.SupportmessageModule = class SupportmessageModule {
};
exports.SupportmessageModule = SupportmessageModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: support_message_1.Support_Message.name, schema: support_message_1.SupportMessageSchema }])],
        controllers: [supportmessage_controller_1.SupportmessageController],
        providers: [supportmessage_service_1.SupportmessageService]
    })
], SupportmessageModule);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportmessageController = void 0;
const common_1 = __webpack_require__(3);
const supportmessage_service_1 = __webpack_require__(21);
let SupportmessageController = exports.SupportmessageController = class SupportmessageController {
    constructor(itemsService) {
        this.itemsService = itemsService;
    }
    create(createItemDto) {
        return this.itemsService.create(createItemDto);
    }
    findAll() {
        return this.itemsService.findAll();
    }
    findOne(id) {
        return this.itemsService.findOne(id);
    }
    findByEmail(searchItemDto) {
        return this.itemsService.findByEmail(searchItemDto.email);
    }
    update(id, updateItemDto) {
        return this.itemsService.update(id, updateItemDto);
    }
    remove(id) {
        return this.itemsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SupportmessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SupportmessageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SupportmessageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('search'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SupportmessageController.prototype, "findByEmail", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SupportmessageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SupportmessageController.prototype, "remove", null);
exports.SupportmessageController = SupportmessageController = __decorate([
    (0, common_1.Controller)('supportmessage'),
    __metadata("design:paramtypes", [typeof (_a = typeof supportmessage_service_1.SupportmessageService !== "undefined" && supportmessage_service_1.SupportmessageService) === "function" ? _a : Object])
], SupportmessageController);


/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportmessageService = void 0;
const common_1 = __webpack_require__(3);
const mongoose_1 = __webpack_require__(4);
const support_message_1 = __webpack_require__(22);
const mongoose_2 = __webpack_require__(9);
let SupportmessageService = exports.SupportmessageService = class SupportmessageService {
    constructor(itemModel) {
        this.itemModel = itemModel;
    }
    async create(createItemDto) {
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }
    async findAll() {
        return this.itemModel.find().exec();
    }
    async findOne(id) {
        return this.itemModel.findById(id).exec();
    }
    async findByEmail(email) {
        return this.itemModel.find({ email }).exec();
    }
    async update(id, updateItemDto) {
        return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
    async remove(id) {
        return this.itemModel.findByIdAndRemove(id).exec();
    }
};
exports.SupportmessageService = SupportmessageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(support_message_1.Support_Message.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], SupportmessageService);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportMessageSchema = exports.Support_Message = void 0;
const mongoose_1 = __webpack_require__(4);
const mongoose_2 = __webpack_require__(9);
let Support_Message = exports.Support_Message = class Support_Message extends mongoose_2.Document {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Support_Message.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Support_Message.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Support_Message.prototype, "message", void 0);
exports.Support_Message = Support_Message = __decorate([
    (0, mongoose_1.Schema)()
], Support_Message);
exports.SupportMessageSchema = mongoose_1.SchemaFactory.createForClass(Support_Message);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const powerfitregisters_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(powerfitregisters_module_1.PowerfitregistersModule);
    app.enableCors({
        origin: true,
        methods: ['POST', 'PUT', 'DELETE', 'GET']
    });
    await app.listen(3004, '0.0.0.0');
}
bootstrap();

})();

/******/ })()
;