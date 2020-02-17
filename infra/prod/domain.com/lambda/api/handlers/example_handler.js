const { createJiraTicket } = require('../lib/jira');

module.exports = async function(req, res) {
    console.log(`Form Submitted -- ${req.body.email}`);
    // Create JIRA ticket
    try {
        let resp = await createJiraTicket(req.body);
        
        res.json({ ticket_key: resp.key, ticket_id: resp.id });
    } catch (error) {
        console.log(error);
    }
};
