<template>
	<div>
		<form>
			<div class="form-group">
				<label for="name">Nombre</label>
				<input type="text" name="name" class="form-control"v-model="tramiteFormEdit.name" @input="nameForm">
			</div>
			<div>
				<label for="description">Descripcion</label>
				<textarea rows="4" class="form-control" name="description" v-model="tramiteFormEdit.description" @input="descriptionForm"></textarea>
			</div>
		</form>
	</div>
</template>

<script type="text/javascript">
	import {mapState, mapMutations} from 'vuex';

	export default {
		computed:{
			...mapState(['tramiteFormEdit'])
			
		},
		methods: {
		
			nameForm(e){
				this.$store.commit('nameEdit', e.target.value);
			
			},
			descriptionForm(e){
				this.$store.commit('descriptionEdit', e.target.value);
			}
		}
	}
</script>