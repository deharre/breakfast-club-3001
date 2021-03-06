var express = require('express');
var router = express.Router();

var members = require('./queries/members');
var arrivals = require('./queries/arrivals');

router.get('/members/allSimple', members.getAllMembersSimplified);

router.get('/members/all', members.getAllMembers);

router.post('/members/add', members.addMember);

router.post('/members/update', members.updateMember);

router.delete('/members/delete', members.deleteMember);

router.post('/members/rotate', members.rotate);

router.post('/members/saveList', members.saveList);

router.post('/members/changeActive', members.changeActive);

// ----------------------------------------------------------------------------

router.get('/arrivals/all', arrivals.getAll);

router.get('/arrivals/lastTen', arrivals.getLastTenArrivals);

router.post('/arrivals/add', arrivals.addEntry);

module.exports = router;