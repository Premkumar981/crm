router.post('/', async (req, res) => {
    const campaign = await Campaign.create(req.body);
    const customers = await Customer.findAll(); // Add logic to filter using campaign.rules
  
    for (const customer of customers) {
      const status = Math.random() > 0.1 ? 'SENT' : 'FAILED';
      const message = `Hi ${customer.name}, here’s 10% off!`;
  
      await CommunicationLog.create({
        campaignId: campaign.id,
        customerId: customer.id,
        message,
        status
      });
    }
  
    res.status(201).json({ success: true, campaignId: campaign.id });
  });
  