module.exports = function(app){

	var ContatoController = {
		index: function(req, res){
			var usuario = req.session.usuario;
			var contatos = usuario.contatos;
			var params = {usuario: usuario, contato: contatos};
			res.render('contatos/index', params);
		},
		create: function(req,res){
			var contato = req.body.contato;
			var usuario = req.session.usuario;
			usuario.contatos.push(contato);
			res.redirect('/contatos');
		},
		show: function(req,res){
			var usuario = req.params.id;
			var contato = usuario.contatos[id];
			var params = {usuario: usuario , contato: contato, id: id};
			res.render('contatos/edit', params)
		},
		update: function(req,res){
			var contato = req.body.contato;
			var usuario = req.sesion.usuario;
			usuario.contatos[req.params.id] = contato;
			res.redirect('/contatos');
		},
		destroy: function(req,res){
			var usuario = req.session.usuario;
			var id = req.params.id;
			usuario.contatos.splice(id, 1);
			res.redirect('/contatos');
		},
		edit : function(req,res){
			var id = req.params.id,
			usuario = req.session.usuario,
			contato = usuario.contatos[id],
			params = {usuario : usuario,
					  contato : contato, 
					  id:id};
			res.render('contatos/edit',params);
		}
	};
	return ContatoController;
};