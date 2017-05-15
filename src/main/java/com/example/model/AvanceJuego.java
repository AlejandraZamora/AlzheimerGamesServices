package
        com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "avanceJuegos", schema = "application")
public class AvanceJuego {
	public AvanceJuego(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "avanceJuego_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "nombreJuego")
private String nombreJuego;

public String getNombreJuego() {
return nombreJuego;
}

public void setNombreJuego(String nombreJuego) {
this.nombreJuego = nombreJuego;
}
@Column(name = "tiempoSegundos")
private Integer tiempoSegundos;

public Integer getTiempoSegundos() {
return tiempoSegundos;
}

public void setTiempoSegundos(Integer tiempoSegundos) {
this.tiempoSegundos = tiempoSegundos;
}
@Column(name = "numeroPreguntasIntentos")
private Integer numeroPreguntasIntentos;

public Integer getNumeroPreguntasIntentos() {
return numeroPreguntasIntentos;
}

public void setNumeroPreguntasIntentos(Integer numeroPreguntasIntentos) {
this.numeroPreguntasIntentos = numeroPreguntasIntentos;
}
@Column(name = "numeroPreguntasAciertos")
private Integer numeroPreguntasAciertos;

public Integer getNumeroPreguntasAciertos() {
return numeroPreguntasAciertos;
}

public void setNumeroPreguntasAciertos(Integer numeroPreguntasAciertos) {
this.numeroPreguntasAciertos = numeroPreguntasAciertos;
}
@Column(name = "nivelMaximoAlcanzado")
private Integer nivelMaximoAlcanzado;

public Integer getNivelMaximoAlcanzado() {
return nivelMaximoAlcanzado;
}

public void setNivelMaximoAlcanzado(Integer nivelMaximoAlcanzado) {
this.nivelMaximoAlcanzado = nivelMaximoAlcanzado;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
        }
