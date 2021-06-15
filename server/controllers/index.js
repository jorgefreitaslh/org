const { Learner, Volunteer, Request, Upcoming, Completed } = require('../models');

const moment = require('moment');
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
const { SENDGRID_API } = require('../config/keys');

const transporter = nodemailer.createTransport(sendGridTransport({
  auth: {
    api_key: SENDGRID_API
  }
}))

const createLearner = async (req, res) => {
  try {
    const learner = await Learner.create(req.body);
    return res.status(201).json({
      learner,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const getAllLearners = async (req, res) => {
  try {
    const learners = await Learner.findAll({
    });
    return res.status(200).json({ learners });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateLearner = async (req, res) => {
  try {
    const { email } = req.params;
    const [updated] = await Learner.update(req.body, {
      where: { email: email }
    });
    if (updated) {
      const updatedLearner = await Learner.findOne({ where: { email: email } });
      return res.status(200).json({ learner: updatedLearner });
    }
    throw new Error('Learner not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLearner = async (req, res) => {
  try {
    const { email } = req.params;
    const learner = await Learner.findOne({
      where: { email: email }
    });
    if (learner) {
      return res.status(200).json({ learner });
    }
    return res.send('Learner not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteLearner = async (req, res) => {
  try {
    const { email } = req.params;
    const deleted = await Learner.destroy({
      where: { email: email }
    });
    if (deleted) {
      return res.status(204).send("Learner deleted");
    }
    throw new Error("Learner not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create(req.body);
    return res.status(201).json({
      volunteer,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const updateVolunteer = async (req, res) => {
  try {
    const { email } = req.params;
    const [updated] = await Volunteer.update(req.body, {
      where: { email: email }
    });
    if (updated) {
      const updatedVolunteer = await Volunteer.findOne({ where: { email: email } });
      return res.status(200).json({ volunteer: updatedVolunteer });
    }
    throw new Error('Volunteer not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.findAll({
    });
    return res.status(200).json({ volunteers });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getVolunteer = async (req, res) => {
  try {
    const { email } = req.params;
    const volunteer = await Volunteer.findOne({
      where: { email: email }
    });
    if (volunteer) {
      return res.status(200).json({ volunteer });
    }
    return res.send('Volunteer not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteVolunteer = async (req, res) => {
  try {
    const { email } = req.params;
    const deleted = await Volunteer.destroy({
      where: { email: email }
    });
    if (deleted) {
      return res.status(204).send("Volunteer deleted");
    }
    throw new Error("Volunteer not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createRequests = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    return res.status(201).json({
      request,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const getAllRequests = async (req, res) => {
  try {
    const request = await Request.findAll({
    });
    return res.status(200).json({ request });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await Request.findOne({
      where: { id: id }
    });
    if (request) {
      return res.status(200).json({ request });
    }
    return res.send('Request not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Request.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send("Request deleted");
    }
    throw new Error("Request not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createUpcoming = async (req, res) => {
  try {
    const upcoming = await Upcoming.create(req.body);
    return res.status(201).json({
      upcoming,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const getAllUpcomings = async (req, res) => {
  try {
    const upcoming = await Upcoming.findAll({
    });
    return res.status(200).json({ upcoming });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getUpcoming = async (req, res) => {
  try {
    const { id } = req.params;
    const upcoming = await Upcoming.findOne({
      where: { id: id }
    });
    if (upcoming) {
      return res.status(200).json({ upcoming });
    }
    return res.send('Upcoming not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUpcoming = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Upcoming.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send("Upcoming deleted");
    }
    throw new Error("Upcoming not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createCompleted = async (req, res) => {
  try {
    const completed = await Completed.create(req.body);
    return res.status(201).json({
      completed,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

const getAllCompleteds = async (req, res) => {
  try {
    const completed = await Completed.findAll({
    });
    return res.status(200).json({ completed });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const completed = await Completed.findOne({
      where: { id: id }
    });
    if (completed) {
      return res.status(200).json({ completed });
    }
    return res.send('Completed not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Completed.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updateCompleted = await Completed.findOne({ where: { id: id } });
      return res.status(200).json({ completed: updateCompleted });
    }
    throw new Error('Completed not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Completed.destroy({
      where: { id: id }
    });
    if (deleted) {
      return res.status(204).send("Completed deleted");
    }
    throw new Error("Completed not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const SendEmail = (req, res) => {
  const { email, from, subject, skill, name, addres, exp, hour, learner } = req.body.body
  transporter.sendMail({
    to: email,
    from: from,
    subject: subject,
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #1188E6;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#ecf0f1;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ecf0f1">
            <tr>
              <td valign="top" bgcolor="#ecf0f1" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 10px 0px 10px; color:#000000; text-align:left;" bgcolor="#ecf0f1" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p>You received a request from Org. To accept it just click on the button.</p>
      </td>
    </tr>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:30px 20px 20px 20px;" bgcolor="#ecf0f1" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="520" style="width:520px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7899ff26-c5b6-4ace-a804-61695d7a8ab9">
    <tbody>
      <tr>
        <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
          <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px;" width="300" alt="" data-proportionally-constrained="true" data-responsive="false" src="http://cdn.mcauto-images-production.sendgrid.net/1530fc21f6e35679/d2d0fccc-aeea-4955-8b12-ede31888ae57/1500x500.png" height="100">
        </td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 10px 0px;" bgcolor="#ecf0f1" data-distribution="1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="580" style="width:580px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eb45d24b-0c52-43db-a74a-7a14ec35c274.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:30px 30px 30px 30px; line-height:30px; text-align:inherit; background-color:#000000;" height="100%" valign="top" bgcolor="#000000" role="module-content"><div><div style="font-family: inherit; text-align: left"><span style="font-size: 30px; color: #439bd7; font-family: courier, monospace"><strong>REQUESTED</strong></span></div>
<div style="font-family: inherit; text-align: left"><span style="color: #439bd7; font-family: courier, monospace; font-size: 18px"><strong>${skill}</strong></span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="d28899db-d593-49c6-975e-6a94b10de8b9">
    <tbody>
      <tr>
        <td style="padding:18px 0px 18px 30px; line-height:22px; text-align:inherit; background-color:#FFF;" height="100%" valign="top" bgcolor="#FFF" role="module-content"><div><div style="font-family: inherit; text-align: left"><span style="unicode-bidi: isolate; line-height: 36px; border-top-width: initial; border-right-width: initial; border-bottom-width: initial; border-left-width: initial; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; padding-top: 2px; padding-right: 0.14em; padding-bottom: 2px; padding-left: 0px; position: relative; margin-top: -2px; margin-right: 0px; margin-bottom: -2px; margin-left: 0px; resize: none; overflow-x: hidden; overflow-y: hidden; text-align: left; width: 270px; white-space: pre-wrap; overflow-wrap: break-word; color: #202124; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: courier new,courier,monospace; font-size: 14px">You call a request, check the information below:</span></div>
<div style="font-family: inherit; text-align: left"><span style="unicode-bidi: isolate; line-height: 36px; border-top-width: initial; border-right-width: initial; border-bottom-width: initial; border-left-width: initial; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; padding-top: 2px; padding-right: 0.14em; padding-bottom: 2px; padding-left: 0px; position: relative; margin-top: -2px; margin-right: 0px; margin-bottom: -2px; margin-left: 0px; resize: none; overflow-x: hidden; overflow-y: hidden; text-align: left; width: 270px; white-space: pre-wrap; overflow-wrap: break-word; color: #202124; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: courier new,courier,monospace; font-size: 14px">${name}, ${addres}</span></div>
<div style="font-family: inherit; text-align: left"><span style="unicode-bidi: isolate; line-height: 36px; border-top-width: initial; border-right-width: initial; border-bottom-width: initial; border-left-width: initial; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; padding-top: 2px; padding-right: 0.14em; padding-bottom: 2px; padding-left: 0px; position: relative; margin-top: -2px; margin-right: 0px; margin-bottom: -2px; margin-left: 0px; resize: none; overflow-x: hidden; overflow-y: hidden; text-align: left; width: 270px; white-space: pre-wrap; overflow-wrap: break-word; color: #202124; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: courier new,courier,monospace; font-size: 14px">${exp}</span></div>
<div style="font-family: inherit; text-align: left"><br></div>
<div style="font-family: inherit; text-align: left"><span style="unicode-bidi: isolate; line-height: 36px; border-top-width: initial; border-right-width: initial; border-bottom-width: initial; border-left-width: initial; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; padding-top: 2px; padding-right: 0.14em; padding-bottom: 2px; padding-left: 0px; position: relative; margin-top: -2px; margin-right: 0px; margin-bottom: -2px; margin-left: 0px; resize: none; overflow-x: hidden; overflow-y: hidden; text-align: left; width: 270px; white-space: pre-wrap; overflow-wrap: break-word; color: #202124; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: courier new,courier,monospace; font-size: 14px">Schedules: <br />${hour.map(item => (` ${moment(item).format('DD MMM hh:mm')}`))}</span></div>
<div style="font-family: inherit; text-align: left"><br></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed;" width="100%" data-muid="1ee175c9-2097-48e5-adb9-0e48f931358b">
      <tbody>
        <tr>
          <td align="center" bgcolor="" class="outer-td" style="padding:0px 0px 0px 0px;">
            <table border="0" cellpadding="0" cellspacing="0" class="wrapper-mobile" style="text-align:center;">
              <tbody>
                <tr>
                <td align="center" bgcolor="#439bd7" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a href="http://localhost:3000/upcoming?country=${addres}&skill=${skill}&exp=${exp}&hour=${hour}&volunteer=${email}&learner=${learner}&name=${name}" style="background-color:#439bd7; border:15px solid #439bd7; border-color:#439bd7; border-radius:0px; border-width:15px; color:#ffffff; display:inline-block; font-weight:bold; letter-spacing:0px; line-height:normal; padding:12px 208.5px 12px 208.5px; text-align:center; text-decoration:none; border-style:solid; font-family:impact, sans-serif; font-size:20px;" target="_blank">ACCEPT REQUEST</a></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c918ae2a-1b73-4559-83c9-817093876854">
    <tbody>
      <tr>
        <td style="padding:18px 0px 25px 0px; line-height:22px; text-align:inherit; background-color:#ecf0f1;" height="100%" valign="top" bgcolor="#ecf0f1" role="module-content"><div><div style="font-family: inherit; text-align: center"><span style="font-family: Roboto, Arial, Helvetica, sans-serif; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: -webkit-left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline; font-size: 12px; color: #777">© 2021</span><span style="font-size: 12px; color: #777"> Org</span><a href="https://mail.google.com/mail/u/0/#m_-8911876017655963991_" title="Google&lt;span&gt;&amp;nbsp;&lt;/span&gt;"><span style="font-size: 12px; color: #777">&nbsp;</span></a></div><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>
    `
  }).then(resp => {
    res.json({ resp })
  })
    .catch(err => {
      console.log(err)
    })
};

module.exports = {
  createLearner,
  getAllLearners,
  updateLearner,
  getLearner,
  deleteLearner,
  createVolunteer,
  updateVolunteer,
  getAllVolunteers,
  getVolunteer,
  deleteVolunteer,
  createRequests,
  getAllRequests,
  getRequest,
  deleteRequest,
  createUpcoming,
  getAllUpcomings,
  getUpcoming,
  deleteUpcoming,
  createCompleted,
  getAllCompleteds,
  getCompleted,
  deleteCompleted,
  updateCompleted,
  SendEmail
}