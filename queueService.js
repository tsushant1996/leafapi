const amqp = require('amqplib/callback_api');

module.exports = {

	sendToQueue: function(params,queue) {
		// amqp://user:pass@host.com/vhost

		// amqp://mqvrdev:vrsha27#@@13.228.242.224
        let rabbitmq_host = 'localhost';
        let  rabbitmq_user = 'admin';
        let rabbitmq_pass = 'password';
		amqp.connect('amqp://localhost', function(err, conn) {
			conn.createChannel(function(err, ch) {
				var q = queue;
				var msg = JSON.stringify(params);

				ch.assertQueue(q, {
					durable: false
				});
				// Note: on Node 6 Buffer.from(msg) should be used
				ch.sendToQueue(q, new Buffer(msg));
				console.log(" [x] Sent %s", msg);
			});
		});
		return;
    }
};